{
  inputs = {
    nixpkgs.url = "github:cachix/devenv-nixpkgs/rolling";
    devenv = {
      url = "github:cachix/devenv";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    flake-utils.url = "github:numtide/flake-utils";
    treefmt-nix.url = "github:numtide/treefmt-nix";
  };
  outputs = {
    devenv,
    flake-utils,
    nixpkgs,
    treefmt-nix,
    self,
    ...
  } @ inputs:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {inherit system;};

        treefmtConfig = {...}: {
          projectRootFile = "flake.nix";
          programs = {
            alejandra.enable = true;
            prettier.enable = true;
          };
        };

        treefmtEval = treefmt-nix.lib.evalModule pkgs (treefmtConfig {inherit pkgs;});
      in {
        checks = {
          treefmt = treefmtEval.config.build.check self;

          web-lint =
            pkgs.runCommand "web-lint" {
              buildInputs = [pkgs.nodejs pkgs.nodePackages.pnpm];
              src = ./.;
              deps = self.packages.${system}.web.pnpmDeps;
            } ''
              cp -r $src/* .
              cp -r $src/.[!.]* . 2>/dev/null || true
              pnpm install --offline --frozen-lockfile --store=$deps
              pnpm run test
              touch $out
            '';

          web-typecheck =
            pkgs.runCommand "web-typecheck" {
              buildInputs = [pkgs.nodejs pkgs.nodePackages.pnpm];
              src = ./.;
              deps = self.packages.${system}.web.pnpmDeps;
            } ''
              cp -r $src/* .
              cp -r $src/.[!.]* . 2>/dev/null || true
              pnpm install --offline --frozen-lockfile --store=$deps
              pnpm run test
              touch $out
            '';
        };

        devShells = {
          default = devenv.lib.mkShell {
            inherit inputs pkgs;

            modules = [
              ({pkgs, ...}: {
                languages = {
                  javascript = {
                    enable = true;
                    npm.enable = true;
                    pnpm = {
                      enable = true;
                      install.enable = true;
                    };
                  };
                  nix.enable = true;
                  typescript.enable = true;
                };

                packages = with pkgs; [
                  alejandra
                  nodePackages.prettier
                ];

                process.manager.implementation = "mprocs";
                processes = {
                  astro-frontend.exec = "pnpm run dev";
                };

                tasks = {
                  "web:lint" = {
                    exec = "pnpm run lint";
                    showOutput = true;
                  };
                  "web:typecheck" = {
                    exec = "pnpm run typecheck";
                    showOutput = true;
                  };
                  "web:test" = {
                    exec = "pnpm run test";
                    showOutput = true;
                  };
                  "web:build" = {
                    exec = "pnpm run build";
                    showOutput = true;
                  };
                };
              })
            ];
          };

          ci = pkgs.mkShell {
            nativeBuildInputs = with pkgs; [
              nodejs
            ];

            packages = with pkgs; [
              importNpmLock.hooks.linkNodeModulesHook
              nodePackages.pnpm
              nodePackages.prettier
              nodejs
            ];

            npmDeps = pkgs.importNpmLock.buildNodeModules {
              nodejs = pkgs.nodejs;
              npmRoot = ./.;
            };
          };
        };

        formatter = treefmtEval.config.build.wrapper;

        packages = {
          default = pkgs.stdenv.mkDerivation rec {
            pname = "cpatino.com";
            version = "0.1.0";
            src = ./web;

            pnpmDeps = pkgs.pnpm.fetchDeps {
              inherit pname version src;
              fetcherVersion = 2;
              hash = pkgs.lib.fakeHash;
            };

            buildInputs = with pkgs; [
              nodejs
              nodePackages.pnpm
              pnpm.configHook
            ];

            installPhase = ''
              pnpm run build

              mkdir -p $out
              cp -r dist/* $out/
            '';
          };
        };
      }
    );
}
