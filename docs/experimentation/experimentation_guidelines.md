---
sidebar_position: 1
---
# General Experimentation Guidelines

Before starting any experiment, it is important to know what you are doing so that you don’t set it up incorrectly or get misled by results. Ideally there is a data scientist on the team who can help design experiments, but if there isn’t, it’s recommended that whoever is setting up the experiments has a good understanding of A/B testing first. A great book to help form an understanding is: *Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing* by Ron Kohavi, Diane Tang, and Ya Xu. However, there is also a plethora of free articles online that cover everything you would need to know about A/B testing.

A few general guidelines one should follow:

- Run the experiment for at least 14 days, even if it has reached enough sample size before then, because novelty effects can cause irregular results that will not last over time.
- Similarly, don’t look at the results until the experiment is over. You can end the experiment once it has passed 14 days and after it has had sufficient sample size.
- Only test one small change at a time. You want to be able to understand exactly what feature is causing a change in a metric. Testing several changes at a time, particularly ones that overlap, will make it more difficult to determine the efficacy of each alteration.
- Make sure there is no external bias causing one group to have a stronger effect than the other. For example, if the feature you are testing causes a longer browser load time, that delay alone is enough to provide a negative user experience, thus contaminating the results.

Waypost currently only offers two treatments for an experiment, a control group and a test group — in other words, A/B/n tests are not supported. However, you can always run other experiments testing other variants one at a time. There’s no limit on the number of experiments you can run.