---
title: "Happiness Simulator: A Multiplayer Game for a 7-Week Group Course"
summary: An interactive game for a 7-week church group course. A big screen plus everyone's phone keeps people focused and engaged.
role: Solo builder (spec, design, AI-assisted development)
type: Real-time multiplayer web app
coverAlt: Happiness Simulator home page in pixel-art style, listing seven levels
tags: [Real-time multiplayer, Spec-driven, Cloudflare Workers]
metrics:
  - { value: "7", label: Levels }
  - { value: "3 weeks", label: From spec to launch }
links:
  - { label: Visit Happiness Simulator (in Chinese), href: "https://www.vibeweb100.com/happiness/zh-TW/" }
---

## Overview

Happiness Simulator is an interactive game designed for a 7-week church group course, and the largest product in the Web100 series.

There are two lines on screen. The top one gets pushed around by life: a promotion, an accident, a medical report, things you can't control. The bottom one isn't affected and only grows. After seven levels the two lines sit side by side, and nobody needs to tell you which one is happiness.

## Why it was built

The group's sharing sessions used slides, so people just sat and listened, with little interaction, and some kept scrolling on their phones. The goal was to keep people focused and engaged during the session, and to make the interaction more meaningful.

## How it works

1. The host opens the big screen and creates a room
2. Everyone scans a QR code to join on their own phone
3. Each level's scenario appears on the big screen, and people make choices on their phones
4. Everyone's choices show up on the big screen in real time and start the discussion

Seven levels, 20 to 25 minutes each, in pixel-art style.

## Built with AI

1. Worked out each level's flow and rules with AI
2. Wrote them up as a spec
3. Had Claude Code build it
4. Tested it for real with rooms and multiple phones

AI does the building; judgement and sign-off stay with a person. About 3 weeks from spec to launch.

## Feedback from real sessions

- **More focus**: phones became a way to take part, not a distraction
- **More interaction**: everyone's choices appear on the big screen, which gets the discussion going
- **Young people love it**: it engages younger participants far more than slides alone
