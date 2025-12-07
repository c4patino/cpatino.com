---
title: "Openness in Multiagent Systems: Lessons from Modeling with Graph Neural Networks"
pubDate: 2025-12-06
description: "Reflections on simulating open environments and using GNNs to model dynamic, unpredictable multiagent systems."
tags: [multiagent systems, GNN, openness, research, simulation]
---

## Introduction

This blog post is a reflection on my ongoing research into multiagent
systems-computer simulations where agents interact in unpredictable
environments—and how I’m using graph neural networks (GNNs) to model them.
Here, I share what "openness" means, the challenges I’ve faced, surprises along
the way, and how this experience is shaping my perspective and future goals.

My aim is not only to sum up what I've learned so far technically, but also to
share personal growth and insights from the process. I hope this reflection is
useful to anyone interested in multiagent systems, GNNs, or the messy reality
of modeling open environments.

## What is “Openness” in Multiagent Systems?

Openness is all about change and unpredictability. In an open system, things
don’t stay the same for long. Here are a few ways that can happen:

- **Agent Openness:** The "agents" in the system-like people, robots, or
  cars-can show up or leave whenever they want. Imagine a ride-sharing app:
  drivers and riders come and go all the time. Or think about a team of
  firefighters-sometimes new people join the team, and sometimes someone has to
  leave early.
- **Task Openness:** The jobs that need doing can appear or disappear,
  sometimes randomly or because of something happening in the world. For
  example, after a football game ends, suddenly a bunch of people need rides
  home. Or in a wildfire, new fires can start unexpectedly, creating new tasks
  for the team.
- **Frame Openness:** What an agent can do might change. Maybe a firefighter’s
  equipment breaks, so they can’t help as much, or they get new gear and become
  more effective. In other words, the abilities and resources of each agent
  aren’t fixed—they can change over time.

All this makes it much harder to predict what will happen next, or to design
systems that can handle whatever comes their way. In closed systems, you know
exactly who’s involved and what needs to be done. In open systems, you have to
be ready for surprises.

## Why Does Openness Matter?

Openness isn’t just a computer science problem—it’s everywhere in real life.
Think about:

- **Public transportation:** Buses and trains have to deal with passengers
  coming and going, traffic jams, and sudden changes in demand.
- **Disaster response:** Teams must adapt to new emergencies, changing team
  members, and unpredictable conditions.
- **Online platforms:** Social networks, games, and apps constantly see new
  users join, old users leave, and new features or problems pop up.

If we want to build systems that work well in the real world, we need to
understand and model openness.

## Modeling Openness with Graph Neural Networks

To try to make sense of these open systems, I used something called a graph
neural network (GNN). You can think of a GNN as a way for a computer to look at
a big web of connections—who’s connected to what, who’s working on which task,
and so on—and learn patterns from it.

Imagine a map with dots for each agent and lines showing how they’re connected
or what tasks they’re working on. The GNN helps the computer “see” this map and
figure out how everyone should act, even as the map changes.

But modeling openness with GNNs wasn’t easy! Here’s why:

- **The web keeps changing:** Since agents and tasks can come and go, the graph
  of interactions between entities in the environment is always shifting. The
  model has to keep up with modeling all of these interactions.
- **Surprises happen:** Sometimes, a bunch of new tasks show up at once, or an
  agent suddenly leaves. The model needs to be flexible.
- **Abilities change:** If an agent gets stronger or weaker, the model has to
  notice and adapt.

![HGNN-MADDPG Architecture](/blog/multiagent-gnn-openness/hgnn_maddpg.png)
_Figure: The architecture I used for my research. It helps the system keep
track of all the changing connections between agents and tasks._

## A Real-World Example: Fighting Wildfires

To test my ideas, I used a simulation inspired by wildfire response. Imagine a
team of firefighters working together to put out fires. Here’s how openness
shows up:

- **Agents:** Firefighters might run out of suppressant and have to leave, or
  new firefighters might arrive from refilling their suppressants.
- **Tasks:** New fires can start at any time, and old ones can be put out or
  burn out.
- **Frames:** A firefighter’s equipment might break or degrade, or they might get new
  tools. This can make them less effective in their work and decrease their capabilities.

The system has to be able to globally coordinate in order to put out as many
fires as possible according to a pre-determined priority function, while at the
same time not having any one agent have to think about the complexity of the
entire system. This means that each agent has to decide which teammates are
relevant to the tasks that they can see and want to work on, and adapt as their
collaborators enter and leave the environment and capabilities change. It’s a
lot like real life-plans change, people come and go, and new problems pop up.

## What Was Hard, What Surprised Me, and What I Learned

### What Was Hard

- **Building a flexible model:** I had to design a system that could handle all
  the changes without starting over every time. It’s like trying to organize a
  team when you don’t know who will show up or what jobs will need doing.
- **Staying stable:** When things changed suddenly—like a bunch of new fires
  starting—the system sometimes got confused or made bad decisions.
- **Creating realistic tests:** I wanted my simulations to feel like real life,
  with all its unpredictability. That meant thinking carefully about how agents
  and tasks could change.

### What Surprised Me

- **Simple rules sometimes win:** In really unpredictable situations, sometimes
  basic strategies (like “help the closest fire”) worked better than
  complicated ones.
- **Details matter:** The way I set up the “openness” in my tests made a huge
  difference in how well the model worked. Small changes could have big
  effects.
- **Good data is crucial:** Knowing exactly when agents and tasks appear or
  disappear helped the model make better decisions.

### What I Learned

- **Flexibility is key:** Models (and people!) need to be ready for change. The
  best systems aren’t rigid—they adapt.
- **Embrace the mess:** Real-world systems are rarely neat and predictable.
  Accepting the messiness leads to better solutions.
- **Teamwork matters:** Whether you’re an agent in a simulation or a researcher
  in a lab, working together and sharing ideas makes a big difference.

## How This Project Changed My Perspective

Before this project, I thought most computer models worked best when everything
was predictable. Now, I see that the real world is full of surprises, and the
best models are the ones that can handle change. I'm more comfortable now
working with things that don’t always go as planned, and I see the value in
building systems that can adapt on the fly.

I also learned how important it is to explain these ideas in simple terms. If
we want our work to help others—whether in research, industry, or everyday
life—we need to make it understandable.

## Looking Ahead

The skills and insights I gained from this project will help me in future
classes, research, and even jobs. I know how to:

- Work with dynamic, unpredictable systems.
- Build models that can adapt and learn as things change.
- Communicate complex ideas in a way that makes sense to everyone.

I'm excited to keep exploring these ideas and see how they can be used in other
fields-like transportation, healthcare, or even social networks. Modeling open
environments is challenging, but it’s also exciting and full of surprises. If
you have questions or want to chat more about this kind of research, feel free
to reach out!
