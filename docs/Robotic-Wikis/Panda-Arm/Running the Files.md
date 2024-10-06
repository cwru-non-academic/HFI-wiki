---
sidebar_position: 3
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 1. The Config File
The config is a .yaml file which the driver uses to configure the robot and its motions.The description of its contents are explained below.

<Tabs groupId="config-panda-yaml">
<TabItem value="connection" label="Connection Configs">

```yaml
IP: # The IPv4 address of the Robot (Only necessary if using the physical robot)
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
valid_controllers: ["null_space","QP"]     

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



</TabItem>

</Tabs>

<br />


### 2. The Driver File

The driver file subscribes to the topic passed in the *config.yaml* file. The message on this topic is the desired pose in the co-ordinate frame of the robot's base-link. The expected message type on this topic is **PoseStamped** which upon subscription is passed to the selected controller to move the robot to the desired pose.

```bash
source ~/ros2_ws/install/setup.bash
ros2 run panda_driver driver.py
```


<br />


### 3. The Keyboard Teleoperation File

To move the robot around using the keyboard, we have provided the *teleop.py*  file. To run this file, you need to be the sudo user to allow access to keyboard inputs.

```bash
sudo su
source /home/<your-username>/.bashrc
source /home/<your-username>/ros2_ws/install/setup.bash
ros2 run panda_driver teleop.py
```

:::note

You may need to install the *keyboard* and *quaternion* library if you have not already done so. 
```bash
pip3 install keyboard
pip3 install pyquaternion
```

:::

<br />

You may now use the keyboard for teleoperating the robot. The teleoperation key legend is as follows (all with respect to baselink's co-ordinate frame)

| Key   | Action    | 
| ---    | ---   | 
| w | move along +ve x-axis (forward) |
| x | move along -ve x-axis  (back) |
| d | move along -ve y-axis (left) |
| a | move along +ve y-axis (right) |
| q | move along +ve z-axis  (up) |
| z | move along -ve z-axis  (down) |
| r | positive roll |
| v | negative roll |
| t | positive pitch |
| b | negative pitch |
| y | positive yaw |
| n | negative yaw |
| s | stop execution of teleop node |


:::info

Order of rotation is Roll, Pitch, Yaw (RPY). However, rotations are not very intuitive to us humans particularly when they are sequential (provided one after the other). The robot may make a very different rotation when a yaw is applied with the roll at 0 degrees vs when the same yaw is applied but the roll being 90 degrees.

:::

:::warning

Commands to the robot are sent event if the keyboard teleoperation terminal is not active. 

:::

:::warning

If the robot is asked to reach a position that is outside of its reachable workspace (singularity) it will behave erratically. Usually, in such scenarios, giving an input that is within the workspace of the robot resumes normal behavior. If that does not solve the problem, you may simply restart the driver.

:::



- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


<br />
<br />




<br />


##### Authors

[Syed Mohammad Asjad](https://github.com/s-m-asjad.png) 

<br />

##### Issues?
Please report issues to *hfisoftware@case.edu*