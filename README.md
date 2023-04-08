> Our requirements are more modest but at the same time more responsible:
> buildings, furniture, drinking glasses may well be consumer items that
> we can destroy without regret after they have served for some short or
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic
> enjoyment from observing them in use.

Erik Gunnar Asplund on **Swedish Grace**.


## TLDR

Interfaces are made of a wild combination of materials. To my knowledge (tmk) this is how should do it.  

### View, Grid

`View` could be named `Page`. `Grid` with intrinsic size skips the need for media queries.

### Col, Row, Couple, ColToRow, Ratio

`Col` and `Row` over whatever else you are using as it empowers `gap`, `margin:auto`, `flex-grow:1`, `flex-wrap:wrap` with little downside: children might need to reach for `width:fit-content`, `min-width:0`,`height:fit-content`. 

`ColToRow` on media query `orientation:landscape` becomes a `Row`. 

With `Ratio` you can create predictable `Card`, `Panel`, `Dialog` out of it.

### List, Table, KeyValue

Render complex data with slots, or as in [Table](https://github.com/polmoneys/react-table). For stats-like content a wrapper over `dl` with added semantics you can use `KeyValue`. 

### Related  

More about [design systems](https://github.com/polmoneys/boost), [apps](https://github.com/polmoneys/react-app) and [css](https://github.com/polmoneys/css-unit). 

### Goal 💐

> Those of you who still find it enjoyable to learn the details of, say, a programming language - being able to happily recite off if NaN equals or does not equal null - you just don't yet understand how utterly fucked the whole thing is. If you think it would be cute to align all of the equals signs in your code, if you spend time configuring your window manager or editor, if put unicode check marks in your test runner, if you add unnecessary hierarchies in your code directories, if you are doing anything beyond just solving the problem - you don't understand how fucked the whole thing is. No one gives a fuck about the glib object model. - **Ryan Dahl**
