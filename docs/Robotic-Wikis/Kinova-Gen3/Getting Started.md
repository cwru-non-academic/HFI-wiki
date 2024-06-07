---
sidebar_position: 2
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

[![Powered by the Robotics Toolbox](https://raw.githubusercontent.com/petercorke/robotics-toolbox-python/master/.github/svg/rtb_powered.min.svg)](https://github.com/petercorke/robotics-toolbox-python)
[![Powered by Python Robotics](https://raw.githubusercontent.com/petercorke/robotics-toolbox-python/master/.github/svg/pr_powered.min.svg)](https://github.com/petercorke/robotics-toolbox-python)

## Requirements

### 1. ROS2 (Humble)

Please follow the steps listed on the official ROS2 [documentation](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html) for installing ROS2 on Ubuntu. 

:::info

The project has been tested using ROS2 Humble. However, other versions of ROS2 such as Foxy should also work. The only exception may arise because of the simulation and/or when the communication with the robot occurs via ROS2 directly. In such scenario, it is suggested to raise an issue on the official kortex repository [here](https://github.com/Kinovarobotics/ros2_kortex) 

:::

<br />

### 2. Kinova API

The Kinova Gen3's API has two modes. A higher level servoing mode and a lower level servoing mode. 

#### a) High Level Servoing Mode
The high level mode is the default mode at bootup and users connect to the base through the API, sending command inputs. The base routes commands to the actuators, and manages a 1 kHz control loop. We shall be using this mode primarily as the project focuses on sending velocity commands to the robot. In high level servoing mode, each API call takes 25 ms to execute which means that our control loop runs no faster than 20Hz.

The project uses the Python version of the API to handle communications in this servoing mode. To install simply

i)  Download the python .whl [file](https://artifactory.kinovaapps.com/ui/native/generic-public/kortex/API/2.6.0/kortex_api-2.6.0.post3-py3-none-any.whl) 

ii) Install the package using the following command

```bash
python3 -m pip install <path_to_whl>
```

#### b) Low Level Servoing Mode
The low level servoing mode allows the user to communicate with the base at 1kHz but now it is our responsibility to mantain the 1kHz control loop. From reviewing open GitHub issues in the Kortex repository, there seems to be no direct method of performing velocity control in this mode. The challenge being when a velocity of 0 degrees/second is sent to any of the joints, the robot drifts because of the gravity vector. In the older versions of the API, there was no mechanism to counteract the fall; however, newer version of the API resorts to raising a *Joint Fault* error when this happens.

:::info

Joint Fault is just the robot's way of saying *" I did something that I was not supposed to "*. Whilst using velocity control in the low level servoing mode, this is caused by the joints obtaining a velocity greater than 0 degrees/second due to the force of gravity when it was commanded to stay at 0 degrees/second. 

:::

<br />

The API suggests sending small increments in positions at 1kHz to mimic the behaviour of velocity control. This can be achieved using the API directly, however, we utilize a ROS2 based controller for this project. To install relevant dependencies

```bash
sudo apt install ros-$ROS_DISTRO-kortex-bringup
```

<br />

### 3. Numerical IK Solver Package
We use *Klampt* to perform our Numerical IK solutions. Klampt is Kris Hauser's Locomotion and Manipulation Planning Toolbox whose development began in 2009 at Indiana University (Currently mantained by the Intelligent Motion Laboratory at University of Illinois Urbana-Champaign). It uses Newton-Raphson's method to estimate the joint angles whilst using the previous joint positions of the robot as its initial guess. The solver shall return the solution if one is found, however, it sometimes does not return a solution even if one exists because of local minimals and constraints. This issue is discussed in more detail in the controllers sections.

```bash
pip3 install Klampt  
```


<br />

### 4. Peter Corke's Robotic Toolbox
One of the go to toolboxes for roboticists, Peter Corke's Robotic Toolbox serves as a vital component in our project too. If you have not already, I would suggest checking out their tutorial Jupyter notebooks [here](https://github.com/petercorke/robotics-toolbox-python). 
```bash
pip3 install roboticstoolbox-python
pip3 install spatialmath-python
```


<br />

### 5. Drake
Drake *(or the Dragon)* is a C++ toolbox developed by the Robot Locomotion Group at MIT Computer Science and Artificial Intelligence Lab (CSAIL). The core development is now taking place at Toyota Research Institute. We shall use the Python bindings of Drake for the purpose of using its numerical solvers/optimization tools in manipulation.
```bash
pip3 install drake
```

<br />

### 6. Github Repository
We are now ready to clone the repository. Clone your desired repository inside your ROS2 workspace. 

<Tabs groupId="github-repo-types">
<TabItem value="cwru" label="Case Western Reserve University Private Repository">

```bash
git clone git@github.com:cwru-non-academic/HFI_Robotics_Kinova.git
```

</TabItem>

<TabItem value="public-facing" label="Public Access Repository">

```bash
# This repository is still under development
```

</TabItem>

</Tabs>



<br />
<br />
<br />

##### References

[Kinova Gen3 Servoing Modes](https://github.com/Kinovarobotics/kortex/blob/master/linked_md/cpp_servoing_modes.md)

[Klampt](https://motion.cs.illinois.edu/software/klampt/latest/pyklampt_docs/)

[Peter Corke's Robotic Toolbox](https://github.com/petercorke/robotics-toolbox-python)

[Drake](https://drake.mit.edu) 
```
@misc{drake,
 author = "Russ Tedrake and the Drake Development Team",
 title = "Drake: Model-based design and verification for robotics",
 year = 2019,
 url = "https://drake.mit.edu"
}
```

<br />


##### Authors

[Syed Mohammad Asjad](https://github.com/s-m-asjad.png) 

<br />

##### Issues?
Please report issues to *hfisoftware@case.edu*

