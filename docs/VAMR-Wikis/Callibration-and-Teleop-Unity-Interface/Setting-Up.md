---
sidebar_position: 1
title: Setting Up the Project
description: This wiki describes how to set Unity for using the VR Teleoperation/Callibration Interface.
author: Asjad
tags: [Unity Callibration, Unity Teleoperation]
hide_table_of_contents: false
---

<br />

### Install Git LFS
Prior to cloning this repository, we need to install Git LFS. This can be accomplished by following the steps listed [here](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage)

<br />

### Clone the Repository
You may now clone the [github repository](https://github.com/cwru-non-academic/HFI_VR_CalibrationTeleoperationUnity/tree/XRtistryONR) for the teleop and callibration interface for Unity.

```bash
git clone git@github.com:cwru-non-academic/HFI_VR_CalibrationTeleoperationUnity.git
```

:::note

You may need to request access if you already do not have it.

:::


<br />

### Modify your GLOBAL .gitconfig
Not everyone on your team may have the same path to UnityYAMLMerge (i.e. diffrent operating systems or install locations). Because of this, we suggest you modify your local config to define the "unityyamlmerge" merge tool that this repository's .gitconfig points to. To do this:

1. Find and open your local config file inside of the hidden git folder `.git\config`

2. Identify your version of unity (e.g. `2020.3.21f1`). This will replace the word `VERSION` in the paths commented below depending on your OS

3. Add the following text to the bottom of the file, subbing in the unitymergetool path:
    ```bash
    [mergetool "unityyamlmerge"]
        trustExitCode = false
        #Replace <path to UnityYAMLMerge> in the next line with the following default locations (may be diffrent depending on your Unity installation location)
        # Installs using the Unity Hub (Default):
        # Win: C:\\Program Files\\Unity\\Hub\\Editor\\VERSION\\Editor\\Data\\Tools\\UnityYAMLMerge.exe
        # MacOS: /Applications/Unity/Hub/Editor/VERSION/Unity.app/Contents/Tools/UnityYAMLMerge
        # Linux: /home/USERNAME/Unity/Hub/Editor/VERSION/Editor/Data/Tools/UnityYAMLMerge
        cmd = '<path to UnityYAMLMerge>' merge -p "$BASE" "$REMOTE" "$LOCAL" "$MERGED"
    ```


<br />


### Opening the Project
This project was created using `2020.3.17f1`. When you open this project in Unity, Unity may say that it needs to upgrade the project. Given this is a bare-bones project, this is a safe action and you may allow Unity to continue. 
:::tip pro-tip

Just like wolf hunt in pairs, it is a great idea for your team to be using the same version of Unity.

:::

<br />


### Adding pre and post-commit scripts
Download the scripts from the link below and paste them into `<your_repo>/.git/hooks/`
- Pre-commit: https://github.com/NYUGameCenter/Unity-Git-Config/blob/master/pre-commit
- Post-commit: https://github.com/NYUGameCenter/Unity-Git-Config/blob/master/post-merge

<br />

### Ready to Roll
If you are starting a new project you can start working now.


:::tip

if you are adding version control to an old project, these steps may be useful:
1. Paste your project files into the current repository on your local machine. 
2. Open the project on the target unity version, so all the files are modified as necessary. 
3. If you had unity collab or plastic, disable it now.
4. Save your project and close unity.
5. delete left over files from plastic or collab like x.meta.private or y.meta.private.meta (some files may be hidden, delete them by enabling the option to view hidden files).
6. Commit and Push.
7. If you are having issues with .meta files check and modify your gitignore or make sure there are no empty folders. 

:::
 




<br />
<br />
<br />

##### Authors
[Luis Mesias Flores](https://github.com/lemfn64.png)

[Syed Mohammad Asjad](https://github.com/s-m-asjad.png) *(editor)*

<br />

##### Issues?
Please report issues to [hfisoftware@case.edu]("hfisoftware@case.edu")