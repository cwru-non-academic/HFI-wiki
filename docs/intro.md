---
sidebar_position: 1
author: Asjad
hide_table_of_contents: true
---

# Wiki Intro

<br />
<br />

Welcome to the root of all Wikis at HFI. Since you are such a curious soul, how about we start with a *how to create a clock in JavaScript*? I promise this to be the last of JavaScript in this entire Wiki (*we all know it is a language of no use*). 


<br />

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

:::tip

The code editor is a *live code editor*. It means you can change the code on the fly and see its results. **Try it out**

:::

<br />
<br />
<br />

##### Authors

[Syed Mohammad Asjad](https://github.com/s-m-asjad.png) 

<br />

##### Issues?
Please report issues to *hfisoftware@case.edu*