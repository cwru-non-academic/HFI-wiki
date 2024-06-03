---
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 1. The Config File
The config is a .yaml file which the driver uses to configure the robot and its motions.The description of its contents are explained below.

<Tabs groupId="config-kinova-yaml">
<TabItem value="connection" label="Connection Configs">

```yaml
IP: # The IPv4 address of the Robot
username: # The user name for connecting to the robot (default is admin)
password: # The password for the given username to connect to the robot (default is admin)
```


:::note

If configurations such as safety boundaries are modified for a certain user, it needs to be ensured that the relevant user's name is password is set before the connection to the robot is established.

:::


</TabItem>

<TabItem value="modes" label="Mode Configs">

```yaml
mode: #Desired Mode from valid_modes
valid_modes: ["default", "sim", "test"]

# "default" mode refers to using robot at its full capablity
# "sim"     mode refers to using simulation
# "test"    mode refers to using the robot at a lower speed
```

:::note

Except for default, not all modes are available for each controller. Please refer to the individual controller's documentation for verification if the given controller is supported in the desired mode. 

:::

:::warning

DO NOT modify the valid_modes values. There is an assertion checker in *utilities.py* that verifies if the desired mode is a valid mode. 

:::


</TabItem>

<TabItem value="controller" label="Controller Configs">

```yaml
controller: #Desired controller from valid_controllers
valid_controllers: ["default", "twist", "joint_velocity","null_space","QP"]     

# default           controller is the ROS2 joint_trajectory controller
# twist             controller is the end-effector twist controller
# joint_velocity    controller is the joint velocity controller
# null_space        controller is the null space controller
# QP                controller is the quadratic programming controller
```

:::warning

DO NOT modify the valid_controllers values. There is an assertion checker in *utilities.py* that verifies if the desired controller is a valid controller. 

:::


</TabItem>

<TabItem value="topic" label="Topic Configs">

```yaml
topic: #The topic name the driver will subscribe to
```

:::note

Topic names start with a *"/"* and the fist character must be a letter. No special characters are allowed.

:::

:::warning

Some topic names are reserved internally for the Kinova Gen3 by ROS2 and will be flagged as invalid. The list of such topic names are
```
"/rosout",
"/rosout_agg",
"/clicked_point",
"/dynamic_joint_states",
"/fault_controller/transition_event",
"/goal_pose",
"/initialpose",
"/joint_state_broadcaster/transition_event",
"/joint_states",
"/joint_trajectory_controller/controller_state",
"/joint_trajectory_controller/joint_trajectory",
"/joint_trajectory_controller/state",
"/joint_trajectory_controller/transition_event",
"/parameter_events",
"/robot_description",
"/robotiq_gripper_controller/transition_event",
"/tf",
"/tf_static",
"/twist_controller/commands",
"/twist_controller/transition_event"
```

:::


</TabItem>

</Tabs>

<br />


### 2. The Driver File

The driver file subscribes to the topic passed in the *config.yaml* file. The message on this topic is the desired pose in the co-ordinate frame of the robot's base-link. The expected message type on this topic is **PoseStamped** which upon subscription is passed to the selected controller to move the robot to the desired pose.

<Tabs groupId="driver-kinova">
<TabItem value="high-level" label="High Level Servoing Mode">

To run the robot in High Level Servoing mode

```bash
source ~/ros2_ws/install/setup.bash
ros2 run kinova_driver driver.py
```

</TabItem>

<TabItem value="low-level" label="Low Level Servoing Mode">

To run the robot in Low Level Servoing mode

```bash
source ~/ros2_ws/install/setup.bash
ros2 run kinova_driver driver.py
```

and in a new terminal

```bash
ros2 launch kortex_bringup gen3.launch.py   robot_ip:=<ip-address-of-robot>
```


</TabItem>

<TabItem value="simulation" label="Simulation Mode">

To run the robot in simulation mode

```bash
source ~/ros2_ws/install/setup.bash
ros2 run kinova_driver driver.py
```

and in a new terminal

```bash
ros2 launch kortex_bringup gen3.launch.py   robot_ip:=XXX.XXX.X.XX  use_fake_hardware:=true
```

</TabItem>

</Tabs>

:::note

Remember to check whether the mode is supported by your desired controller.

:::


<br />


### 3. The Keyboard Teleoperation File

To move the robot around using the keyboard, we have provided the *teleop.py*  file. To run this file, you need to be the sudo user to allow access to keyboard inputs.

```bash
sudo su
source /home/<your-username>/.bashrc
source /home/<your-username>/ros2_ws/install/setup.bash
ros2 run kinova_driver teleop.py
```

:::note

You may need to install the *keyboard* library if you have not already done so. 
```bash
sudo su
pip3 install keyboard
```

:::

<br />

You may now use the keyboard for teleoperating the robot. The teleoperation key legend is as follows (all with respect to baselink's co-ordinate frame)

| Key   | Action    | 
| ---    | ---   | 
| w | move along +ve x-axis |
| x | move along -ve x-axis |
| d | move along +ve y-axis |
| a | move along -ve y-axis |
| q | move along +ve z-axis |
| z | move along -ve z-axis |
| c | rotate gripper to face down |
| v | rotate gripper to face sideways |
| s | stop execution of teleop node |

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

<br />
<br />

:::tip

The *utilities.py* file is there to avoid code repeatability and is only used by other files for the said purpose. The contents of the controller files are discussed in their respective sections, however, some useful tips if you are planning to create a new script for interfacing with the robot and desire to use the High Level Servoing mode are

1) You can use the utilities.py file directly or refer to it for creating a connection with the robot's base.

2) The Kinova Gen3 API is not suited for python 3.10 and higher. Unfortunately python 3.10 is the default python version for ROS2 Humble. The work around for this is your kortex libraries must be imported after the following lines

```python
import sys
if sys.version_info.major == 3 and sys.version_info.minor >= 10:
    import collections
    setattr(collections, "MutableMapping", collections.abc.MutableMapping)
    setattr(collections,"MutableSequence", collections.abc.MutableSequence)


#from kortex_api....
```

:::


<br />
<br />
<br />


##### Authors

[Syed Mohammad Asjad](https://github.com/s-m-asjad.png) 

<br />

##### Issues?
Please report issues to *hfisoftware@case.edu*