---
title: 'Meet our Team'
description: 'These are the current leaders of Nebula Labs, if you have a question about anything Nebula - these are the people to ask!'
---

<link href="/fontawesome-free-6.2.1-web/css/fontawesome.css" rel="stylesheet"/>
<link href="/fontawesome-free-6.2.1-web/css/brands.css" rel="stylesheet"/>

export const Profile = ({image = 'blank.png', name, position, linkedin, discord}) => (

<div style = {{maxWidth: '20%', minWidth: '200px', padding: '2em'}}>
<img src = {require('/img/headshots/' + image).default} style = {{borderRadius: '50%'}}/>
<p style = {{textAlign: 'center'}}>{name}<br/><em>{position}</em><br/><a href = {'https://linkedin.com/in/' + linkedin}><i class="fa-brands fa-linkedin fa-lg" style = {{paddingRight: '5px', color: '#0077B5'}}/></a><a href = {'https://discord.com/users/' + discord}><i class="fa fa-brands fa-discord" style = {{paddingRight: '5px', color: '#5865F2'}}/></a></p>
</div>
);

## Officers

The officer ensures the smooth operation of Nebula through managing organization governance, strategy, and risk.

<div class='container' style = {{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    <Profile image='ryan2.jpeg' name = 'Ryan Radloff' position = '"President"' linkedin='ryan-radloff' discord = '186618575065186304'/>
    <Profile image='eric.jpeg' name = 'Eric Boysen' position = 'President' linkedin = 'eric-boysen-a16243192' discord = '394579406514946069'/>
    <Profile image='charlie2.jpeg' name = 'Charlie Mahana' position = 'Executive Director' linkedin = 'charlie-mahana-138035169' discord = '335859251954057217'/>
    <Profile image = 'rajmeet.jpeg' name = 'Rajmeet Juneja' position = 'Treasurer' linkedin = 'rajmeetjuneja' discord = '481903934127210496'/>
    <Profile image = 'nathan.jpeg' name = 'Nathan Williams' position = 'Secretary' linkedin = 'nathan-williams-357a5b61' discord = '546169305553961020'/>
</div>

## Division Heads

Division heads share knowledge, coordinate activities, and host events for their areas of expertise.
Most Nebula members are part of the division(s) most aligned with their interests.

<div class='container' style = {{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    <Profile image='david.jpeg' name = 'David Launikitis' position = 'Head of Engineering' linkedin = 'dlaunikitis' discord = '206933990848987136'/>
    <Profile image = 'umesh.jpeg' name = 'Umesh Reddy' position = 'Head of Product' linkedin = 'umesh-reddy-m' discord = '940108979290390538'/>
    <Profile image = 'shreyas.jpeg' name = 'Shreyas Subramanian' position = 'Head of Design' linkedin = 'shreyas-subramanian' discord = '705841728946569226'/>
    <Profile image = 'shreya.jpeg' name = 'Shreya Nallamothu' position = 'Head of Marketing' linkedin = 'shreya-n-1a334a1b8' discord = '883273781831946250'/>
</div>

## Project Leads

Project leads lie at the core of Nebula Labs' leadership team. Our leads serve to unify groups of recruits and members under a common purpose - creating amazing tools for the betterment of the UT Dallas community.

<div class='container' style = {{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    <Profile image='william2.jpeg' name = 'William Skaggs' position = 'Trends Lead' linkedin = 'william-skaggs-4b86881b7' discord = '168110309637095424'/>
    <Profile image='caleb2.jpeg' name = 'Caleb Lim' position = 'Planner Lead' linkedin = 'caleeb-lim' discord = '154007279694249984'/>
    <Profile image='willie2.jpeg' name = 'Willie Chalmers III' position = 'Survival Guide Lead' linkedin = 'willie-chalmers-iii' discord = '325854464311296010'/>
    <Profile image = 'jake.jpeg' name = 'Jake Spann' position = 'Jupiter Lead' linkedin = 'jake-spann-35210615a' discord = '454381703939489805'/>
    <Profile image='adam.jpeg' name = 'Adam Szumski' position = 'Trends Skedge Lead' linkedin = 'adam-szumski' discord = '308747353781829633'/>
    <Profile image = 'adamb.jpeg' name = 'Adam Brunn' position = 'API Lead' linkedin = 'adammcadamson' discord = '89857324717449216'/>
</div>
