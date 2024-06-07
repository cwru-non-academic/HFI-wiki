---
sidebar_position: 2
---


import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Requirements

### 1. ROS2 (Humble)

Please follow the steps listed on the official ROS2 [documentation](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html) for installing ROS2 on Ubuntu. 

:::info

The project has been tested using ROS2 Humble. However, other versions of ROS2 such as Foxy should also work. 

:::

<br />


### 2. Clone the repo

Let git do the hard work for you

```bash
git clone git@github.com:cwru-non-academic/HFI_Robotics_Gimbal.git
```

<br />



### 3. Python Dependencies

Time to install the python dependencies using pip

```bash
cd HFI_Robotics_Gimbal
pip3 install -r requirements.txt
```


<br />



## Dynamic Reconfiguration

Since the device may join any COM/USB port, it is best to let the Operating System dynamically handle it. 



<Tabs groupId="dynamic-reconfig-dynamixel">
<TabItem value="linux" label="Ubuntu">


#### Dynamixel Access Rules
We want the user to be able to read and write on this COM/USB port but not have any outside user who is not running the driver to be able to access or modify its values. To achieve that type the following command in the terminal

```bash
sudo nano /etc/udev/rules.d/89-dynamixel.rules 
```

If the following lines do not exist within the file, add them to it.

```
SUBSYSTEM=="tty"
ATTRS{idVendor}=="0403"
ATTRS{idProduct}=="6014"
GROUP==dialout
MODE=="0660"
```

<br />


#### USB Naming Rules
As mentioned previously, to give our Dynamixel motors are static name, we shall create a rule in Linux to achieve that.

Type the following command in the terminal

```bash
sudo nano /etc/udev/rules.d/99-USB-NAMES.rules 
```

If the following lines do not exist within the file, append them to it.

```
KERNEL=="ttyUSB[0-9]*",MODE="0666",GROUP="dialout"
KERNEL=="ttyACM[0-9]*",MODE="0666",GROUP="dialout"
KERNEL=="ttyUSB[0-9]", ATTRS{idProduct}=="6014", ATTRS{idVendor}=="0403", SYMLINK+="u2d2"
```


<br />

#### USB Latency Rules
Linux is not a real-time Operating System and by default, it has a latency of 16ms for reading from serial. We can reconfigure Linux to reduce the latency to 1ms. Simply type the following command

```bash
sudo nano /etc/udev/rules.d/49-USB-LATENCY.rules
```

If the following lines do not exist, append within the file
```
ACTION=="add", SUBSYSTEM=="usb-serial", DRIVER=="ftdi_sio",
ATTR{latency_timer}="1"
```

:::tip

You can type the following command in a new terminal to see if the latency timer was updated.

```bash
cat sys/bus/usb-serial/devices/ttyUSB0/latency_timer
```

The output should be `1`

:::

</TabItem>

<TabItem value="Windows" label="Windows">

*Migrate to Linux*

</TabItem>

</Tabs>


<br />


##### Authors and Contributors
[Evan Harber](https://www.linkedin.com/in/evan-harber)

[Cole Ten](https://www.linkedin.com/in/cole-ten)

[Shengxin Jia](https://www.linkedin.com/in/shengxin-jia-0a121389)

[Syed Mohammad Asjad](https://github.com/s-m-asjad.png) 

<br />

##### Issues?
Please report issues to *hfisoftware@case.edu*

