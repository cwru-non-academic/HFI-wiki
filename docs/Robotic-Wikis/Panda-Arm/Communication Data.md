---
sidebar_position: 4
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 1. Data Types

#### A. Pose Stamped
The [pose stamped](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/PoseStamped.html) message contains the desired location of the robot's end-effector from its base. By default, it is published on the `simulation/pose`  topic by keyboard teleop node. The robot's driver subscribes to this topic, performs the Inverse Kinematics and updates the robot inside the simulation.

The data type consists of the following components

```
- Header
    it contains the timestamp of the data in seconds and nanoseconds.

- Position
    it contains the x,y,z displacement from the base in meters.

- Orientation
    it contains the quaternion(w,x,y,z) for the rotation from the base

```


#### B. Joint State
The [joint state](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html) message contains the current joint positions of the robot. By default, it is published on the *panda/jointstate* by the robot's driver and contains the following components

```
- Header
    it contains the timestamp of the data in seconds and nanoseconds.

- Position
    it contains joint angles, in radians, of the robot arm.

```

<br />

### 2. Viewing the Data


We can visualize/plot the data in real-time using [RQt](https://docs.ros.org/en/humble/Concepts/Intermediate/About-RQt.html). The data can be printed on the terminal using the following terminal commands.

<Tabs groupId="ros-topic-echo">
<TabItem value="pose" label="Pose Stamed">

```bash
ros2 topic echo /simulation/pose
```


</TabItem>
<TabItem value="jointstate" label="Joint State">

```bash
ros2 topic echo /panda/jointstate
```
</TabItem>

</Tabs>

<br />

### 3. Recording Data

Data can be recorded to a ROS2 bag file using the command
```bash
ros2 bag record /simulation/pose /panda/jointstate
```

:::note

For the command provided above, you can choose to omit either `/simulation/pose` or `/panda/jointstate` if you do not plan to record both data streams.

:::

:::note

A ROS2 bag can be converted to a CSV file using the [rosbag](https://pypi.org/project/rosbags/) python package.

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