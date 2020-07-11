Col-ledges Add-on
---

Minecraft Bedrock add-on for the col-ledges server

## Dev Notes

### Pre-requisites
 
> I have set this repo up as a node project using some tools that I found that will let me write typescript scripts
> and also allow me to sync the repo with the Minecraft `development_xxx_packs` folders for Minecraft Bedrock on Windows.

- Node.js (v10) 
     - You can download the msi from [here](https://nodejs.org/dist/latest-v10.x/) and install through that.

### Scripts

#### `npm run installaddon`
This will build the repo and install the add-on to the Minecraft folder `C:\Users\<USERNAME>\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\development_behavior_packs` and `C:\Users\<USERNAME>\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\development_resource_packs` respectively.

#### `npm run watch`
This will allow you to make changes and have your changes automatically built and added to the Minecraft folders. It should help to speed up iterations while you make changes.

### Other tools

#### [Visual Studio Code](https://code.visualstudio.com/download)

This is useful for developing in the add-on as it will guide you through using typescript and is a nice editor in general for JS/TS development

#### Yeoman (Minecraft addon generator)

This repo was initialised by using a tool called `yeoman` and a package called `generator-minecraft-addon` which I found [on this site](https://minecraft-addon-tools.github.io/tutorials/getting-started). It can guide you through setting up a repo just like this one (with the node scripts etc.) by just following a simple command prompt.