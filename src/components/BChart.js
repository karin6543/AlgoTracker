import React, { useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import * as d3 from "d3";
const leetcode_data = 
[
    {
      "qTechnique": "Array Binary Search",
      "difficulty": "Easy",
      "rate": 0.534277778
    },
    {
      "qTechnique": "Array Binary Search",
      "difficulty": "Hard",
      "rate": 0.393657143
    },
    {
      "qTechnique": "Array Binary Search",
      "difficulty": "Medium",
      "rate": 0.469134615
    },
    {
      "qTechnique": "BST",
      "difficulty": "Hard",
      "rate": 0.371
    },
    {
      "qTechnique": "BST",
      "difficulty": "Medium",
      "rate": 0.701
    },
    {
      "qTechnique": "Graph BFS",
      "difficulty": "Easy",
      "rate": 0.498
    },
    {
      "qTechnique": "Graph BFS",
      "difficulty": "Hard",
      "rate": 0.4391875
    },
    {
      "qTechnique": "Graph BFS",
      "difficulty": "Medium",
      "rate": 0.513317073
    },
    {
      "qTechnique": "Graph DFS",
      "difficulty": "Easy",
      "rate": 0.498
    },
    {
      "qTechnique": "Graph DFS",
      "difficulty": "Hard",
      "rate": 0.4391875
    },
    {
      "qTechnique": "Graph DFS",
      "difficulty": "Medium",
      "rate": 0.513317073
    },
    {
      "qTechnique": "Hash Table",
      "difficulty": "Easy",
      "rate": 0.539313559
    },
    {
      "qTechnique": "Heap",
      "difficulty": "Easy",
      "rate": 0.5675
    },
    {
      "qTechnique": "Heap",
      "difficulty": "Hard",
      "rate": 0.444315789
    },
    {
      "qTechnique": "Heap",
      "difficulty": "Medium",
      "rate": 0.49908
    },
    {
      "qTechnique": "Memoization",
      "difficulty": "Hard",
      "rate": 0.465
    },
    {
      "qTechnique": "Pointers",
      "difficulty": "Easy",
      "rate": 0.515333333
    },
    {
      "qTechnique": "Pointers",
      "difficulty": "Medium",
      "rate": 0.531419355
    },
    {
      "qTechnique": "Prefix Trie",
      "difficulty": "Easy",
      "rate": 0.5525
    },
    {
      "qTechnique": "Prefix Trie",
      "difficulty": "Hard",
      "rate": 0.432444444
    },
    {
      "qTechnique": "Prefix Trie",
      "difficulty": "Medium",
      "rate": 0.5608
    },
    {
      "qTechnique": "Singly Linked List",
      "difficulty": "Easy",
      "rate": 0.55
    },
    {
      "qTechnique": "Singly Linked List",
      "difficulty": "Hard",
      "rate": 0.444
    },
    {
      "qTechnique": "Singly Linked List",
      "difficulty": "Medium",
      "rate": 0.492225806
    },
    {
      "qTechnique": "Stack/Queue",
      "difficulty": "Easy",
      "rate": 0.611071429
    },
    {
      "qTechnique": "Stack/Queue",
      "difficulty": "Hard",
      "rate": 0.448
    },
    {
      "qTechnique": "Stack/Queue",
      "difficulty": "Medium",
      "rate": 0.520522727
    },
    {
      "qTechnique": "String",
      "difficulty": "Easy",
      "rate": 0.605926829
    },
    {
      "qTechnique": "String",
      "difficulty": "Hard",
      "rate": 0.414
    },
    {
      "qTechnique": "String",
      "difficulty": "Medium",
      "rate": 0.49227193
    },
    {
      "qTechnique": "Tabulation",
      "difficulty": "Easy",
      "rate": 0.520285714
    },
    {
      "qTechnique": "Tabulation",
      "difficulty": "Hard",
      "rate": 0.446835938
    },
    {
      "qTechnique": "Tabulation",
      "difficulty": "Medium",
      "rate": 0.483218487
    },
    {
      "qTechnique": "Tree BFS",
      "difficulty": "Easy",
      "rate": 0.5396
    },
    {
      "qTechnique": "Tree BFS",
      "difficulty": "Hard",
      "rate": 0.44264
    },
    {
      "qTechnique": "Tree BFS",
      "difficulty": "Medium",
      "rate": 0.53362069
    },
    {
      "qTechnique": "Tree Binary Search",
      "difficulty": "Easy",
      "rate": 0.534277778
    },
    {
      "qTechnique": "Tree Binary Search",
      "difficulty": "Hard",
      "rate": 0.393657143
    },
    {
      "qTechnique": "Tree Binary Search",
      "difficulty": "Medium",
      "rate": 0.469134615
    },
    {
      "qTechnique": "Tree DFS",
      "difficulty": "Easy",
      "rate": 0.594235294
    },
    {
      "qTechnique": "Tree DFS",
      "difficulty": "Hard",
      "rate": 0.468375
    },
    {
      "qTechnique": "Tree DFS",
      "difficulty": "Medium",
      "rate": 0.562716981
    }
  ]

function BChart({diff}) {
    const { currentUser, logout, userData } = useAuth()
    useEffect(()=>{
    
        if(userData){
            const data = userData
         
            d3.select('#benchmarkContainer').selectAll('svg').remove()
            let filtered = []
        data.forEach((row)=>{
            if(row.data().difficulty === diff){
            filtered.push(row.data())
            }})

         // get unique type

        let uniqueTypes = []
        filtered.forEach((item)=>{
            if(uniqueTypes.indexOf(item.qTechnique) ===-1){
            uniqueTypes.push(item.qTechnique)
            }
        })
 
  // calculate rates

  let rates = []

  uniqueTypes.forEach((type) => {
   
    let count = 0
    let pass = 0
    for(let i =0; i<data.length; i++ ){
      if(type === data[i].data().qTechnique && data[i].data().difficulty === diff){
        count+=1
        if(data[i].data().pass){
          pass+=1
        }
      }
    }
    let lc_rate = null
    for(let j = 0; j < leetcode_data.length; j++){
      if(leetcode_data[j].qTechnique === type && leetcode_data[j].difficulty === diff){
        lc_rate = leetcode_data[j].rate
      }
    }

    rates.push({
      group: type,
      user: pass/count || 0,
      lc: lc_rate
    })
  })

  rates['columns'] = uniqueTypes
  // rates ready

  var margin = {top: 10, right: 30, bottom: 20, left: 50},
  width = 1000,
  height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
var svg = d3.select("#benchmarkContainer")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

        // List of subgroups = header of the csv files = soil condition here
  var subgroups = ['user', 'lc']

  // List of groups = species here = value of the first column called group -> I show them on the X axis
//   var groups = d3.map(rates, function(d){return(d.group)}).keys()
  var groups = uniqueTypes

  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, .7])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Another scale for subgroup position?
  var xSubgroup = d3.scaleBand()
    .domain(subgroups)
    .range([0, x.bandwidth()])
    .padding([0.05])

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['#387D7A','#FFD700'])

  // Show the bars
  svg.append("g")
    .selectAll("g")
    // Enter in data = loop group per group
    .data(rates)
    .enter()
    .append("g")
      .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
    .selectAll("rect")
    .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
    .enter().append("rect")
      .attr("x", function(d) { return xSubgroup(d.key); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", 20)
      .attr("height", function(d) { return height - y(d.value); })
      .attr("fill", function(d) { return color(d.key); });

  }
    }, [diff]);    
    return (
        <div id="benchmarkContainer" style={{margin: '0px 20px'}} >
            
        </div>
    )
}

export default BChart
