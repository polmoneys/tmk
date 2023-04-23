## TLDR

Interfaces are made of a wild combination of materials. To my knowledge (tmk) this is how should do it.  

### View, Grid

`View` could be named `Page`. Ideal for outer layout/s and content heavy pages. `Grid` with intrinsic size skips the need for media queries, it's sugar over `Group`. 

### Col, Row, Couple, ColToRow, Group

`Col` and `Row` over whatever else you are using as it empowers `gap`, `margin:auto`, `flex-grow:1`, `flex-wrap:wrap` with little downside: children might need to reach for `width:fit-content`, `min-width:0`,`height:fit-content`. Them are also sugar over `Group`.
`ColToRow` on media query `orientation:landscape` becomes a `Row`. 

With `Group` and **ratio** prop you can create predictable `Card`, `Panel`, `Dialog`...

### List, Table, KeyValue

Render complex data with list items with start/end slots, or use an interactive [Table](https://github.com/polmoneys/react-table). Finally, for stats-like content you can use `KeyValue`, a wrapper over `dl` with added semantics. 

### Related work 

I've gone down the rabbit hole about [design systems](https://github.com/polmoneys/boost), [apps](https://github.com/polmoneys/react-app) and [state mgmt](https://github.com/polmoneys/useT). 

### Inspiration

> Our requirements are more modest but at the same time more responsible:
> buildings, furniture, drinking glasses may well be consumer items that
> we can destroy without regret after they have served for some short or
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic
> enjoyment from observing them in use.

Erik Gunnar Asplund on **Swedish Grace**.
