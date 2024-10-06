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

The project has been tested using ROS2 Humble on Ubuntu 22.04 LTS. However, other versions of ROS2 such as Foxy and Jazzy also work. Please verify which version of ROS2 is supported by your version of Ubuntu.

:::

<br />

:::warning

For the installations listed below, if you are using a Conda/Miniconda environment, ensure that your Python 3 version is compatible with the ROS2 version you are using. For example, ROS2 Humble only supports python 3.10

:::

### 2. Peter Corke's Robotic Toolbox
One of the go to toolboxes for roboticists, Peter Corke's Robotic Toolbox serves as a vital component in our project too. If you have not already, I would suggest checking out their tutorial Jupyter notebooks [here](https://github.com/petercorke/robotics-toolbox-python). 
```bash
pip3 install roboticstoolbox-python
pip3 install spatialmath-python
```


<br />

### 3. Drake
Drake *(or the Dragon)* is a C++ toolbox developed by the Robot Locomotion Group at MIT Computer Science and Artificial Intelligence Lab (CSAIL). The core development is now taking place at Toyota Research Institute. We shall use the Python bindings of Drake for the purpose of using its numerical solvers/optimization tools in manipulation.
```bash
pip3 install drake
```

<br />

### 4. Numpy
Please install the following version of Numpy. Newer versions should also work.
```bash
pip3 install numpy==1.24.4
```


<br />

### 5. Github Repository
We are now ready to clone the repository. Clone your desired repository inside your ROS2 workspace. 

<Tabs groupId="github-repo-types">
<TabItem value="cwru" label="Case Western Reserve University Private Repository">

```bash
mkdir ~/ros2_ws
mkdir ~/ros2_ws/src
cd ~/ros2_ws/src
git clone git@github.com:cwru-non-academic/HFI_Robotics_Panda.git
cd ..
colcon build
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

