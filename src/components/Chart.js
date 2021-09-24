import React, { useEffect } from 'react'
import { useAuth } from "../contexts/AuthContext"
import * as d3 from "d3";




function Chart() {
    const { logout, userData } = useAuth()
    useEffect(()=>{
      if(userData){
        let data = userData
        let rows = []
        data.forEach((row)=>{
          rows.push(row.data())
        })
    
        let parsedData = []
        let dateKeys = []
    
        data.forEach(d => {
          let row = d.data()
          if(dateKeys.indexOf(row.date)===-1){
            dateKeys.push(row.date);
          }
        })
        
        dateKeys.forEach(key =>{
            let obj = {date:key}
            obj.qNumFail = 0;
            obj.qNumPass = 0;
            for(let i=0; i<data.length; i++){
              if(data[i].data().date===key){
                obj[key]=key;
                obj['qTechnique'] = data[i].data().qTechnique
                if(data[i].data().pass===false){
                  obj.qNumFail+=1
                }
                else{
                  obj.qNumPass+=1
                }
              }
            }
            parsedData.push(obj)
          })
    
          let passRate = {}
        let techniques = []
    
        for(let i =0; i < rows.length; i++){
          if(techniques.indexOf(rows[i].qTechnique)===-1){
            techniques.push(
              rows[i].qTechnique)
          }
        }
        techniques.forEach((technique)=>{
          let count = 0
          let pass = 0
          for(let i =0; i<rows.length; i++){
            if(rows[i].qTechnique === technique){
              count +=1;
              if(rows[i].pass){
                pass+=1
              }
            }
          }
          passRate[technique] = (pass / count).toFixed(2);
        })
    
        const dsTypes = []
    
        data.forEach(d => {
          let row = d.data()
          if(dsTypes.indexOf(row.qType)===-1){
            dsTypes.push(row.qType);
          }
        })
    
        const treeData ={
          children:[],
          name:'CEO',
        }
        dsTypes.forEach((ds)=>{
          let childRows = []
          let visited = []
          for(let i = 0; i<rows.length; i++){
            if(rows[i].qType === ds && visited.indexOf(rows[i].qTechnique)===-1){
              visited.push(rows[i].qTechnique)
              childRows.push({
                name:rows[i].qTechnique,
                group:'?',
                value: passRate[rows[i].qTechnique],
                colname:"level3"
              })
            }
          }
          treeData.children.push({
            colname:"level2",
            children: childRows,  
            name:ds
          })
        })
        parsedData.sort(function(a,b){
          return new Date(a.date) - new Date(b.date);
        })
        
    
    
        parsedData.forEach(doc => {
          let contentDetail = ''
          let dateStorage = []
          rows.forEach((row)=>{
            if(row.date === doc.date){
              contentDetail+=
                `<div class="collapsible-body brown lighten-4">
                <h4>Problem Type: ${row.qType} </h4>
                <div>Technique Type: ${row.qTechnique} </div>
                <div>Pass Status: ${row.pass} </div>
                </div>`
            }
          })
    
          parsedData['columns'] = Object.keys(doc)
        });
    
  
    
        let svgWidth = 500, svgHeight = 300, barPadding =5;
        let barWidth = (svgWidth / data.length);
        
        var margin = {top: 10, right: 30, bottom: 70, left: 50}
        let width = 1100
        let height = 300
        d3.select('#my_dataviz').selectAll('svg').remove()
        let svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
            var subgroups = ['qNumFail' ,'qNumPass']
    
            // List of groups = species here = value of the first column called group -> I show them on the X axis
        //   var groups = d3.map(parsedData, function(d){return(d.date)}).keys()
          let groups= dateKeys.sort()
          var x = d3.scaleBand()
        .domain(groups)
        .range([0, width])
        .padding([0.2])
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .selectAll("text")
        .attr("transform", "translate(-10,10)rotate(-45)")
        .style("text-anchor", "end")
        .style("font-size", 12)
        .style("fill", "#22223b")
        var y = d3.scaleLinear()
      .domain([0, 10])
      .range([ height, 0 ]);
     
    svg.append("g")
      .call(d3.axisLeft(y));
    
    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
      .domain(subgroups)
      .range(['#DD6168','#50B883'])
    
    
      var Tooltip = d3.select("#my_dataviz")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
    
    //stack the data? --> stack per subgroup
    var stackedData = d3.stack()
      .keys(subgroups)
      (parsedData)
      var tooltip = svg.append("g")
      .attr("class", "tooltip")
      .style("display", "none");
    

    tooltip.append("rect")
      .attr("width", 60)
      .attr("height", 20)
      .attr("fill", "white")
      .style("opacity", 0);
    
    tooltip.append("text")
      .attr("x", 30)
      .attr("dy", "1.2em")
      .style("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold");
    
    svg.append("g")
      .selectAll("g")
      // Enter in the stack data = loop key per key = group per group
      .data(stackedData)
      .enter().append("g")
        .attr("fill", function(d) { return color(d.key); })
        .selectAll("rect")
        // enter a second time = loop subgroup per subgroup to add all rectangles
        .data(function(d) { return d; })
        .enter().append("rect")
          .attr("x", function(d) { return x(d.data.date); })
          .attr("y", function(d) { return y(d[1]); })
          .attr("height", function(d) { return y(d[0]) - y(d[1]); })
          .attr("width",x.bandwidth())
      svg.append("text")
      .attr("x", (width / 2))             
      .attr("y", 0)
      
      var margin = {top: 10, right: 10, bottom: 10, left: 0}
      width = 1200
      height = 600 - margin.top - margin.bottom;
      d3.select('#my_tree').selectAll('svg').remove()
    
      svg = d3.select("#my_tree")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
      
            var root = d3.hierarchy(treeData).sum(function(d){ return d.value}) // Here the size of each leave is given in the 'value' field in input data
    
            // Then d3.treemap computes the position of each element of the hierarchy
            d3.treemap()
              .size([width, height])
              .paddingTop(28)
              .paddingRight(7)
              .paddingInner(3)      // Padding between each rectangle
              //.paddingOuter(6)
              //.padding(20)
              (root)
            
            // prepare a color scale
            var color = d3.scaleOrdinal()
              .domain(["Tree", "Graph", "Linked List", "Array", "Dynamic Programming"])
              .range([ "#402D54", "#D18975", "#8FD175","#fcb045","#2cf180" ])
            
            // And a opacity scale
            var opacity = d3.scaleLinear()
              .domain([0, 1])
              .range([0.3,1])
            
              var Tooltip = d3.select("#my_tree")
              .append("div")
              .style("opacity", 0)
              .attr("class", "tooltip")
              .style("background-color", "white")
              .style("border", "solid")
              .style("border-width", "2px")
              .style("border-radius", "5px")
              .style("padding", "5px")
        
              svg
              .selectAll("rect")
              .data(root.leaves())
              .enter()
              .append("rect")
                .attr('x', function (d) { return d.x0; })
                .attr('y', function (d) { return d.y0; })
                .attr('width', function (d) { return d.x1 - d.x0; })
                .attr('height', function (d) { return d.y1 - d.y0; })
                .style("stroke", "black")
                .style("fill", function(d){ 
                  if(d.parent){
                    return color(d.parent.data.name)
                  }} )
                .style("opacity", function(d){ return opacity(d.data.value)})
    
                svg
                .selectAll("text")
                .data(root.leaves())
                .enter()
                .append("text")
                  .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
                  .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
                  .text(function(d){ 
                    if(d.data.value>0.01){return d.data.name.split(' ').join('\n') }})
                  .attr("font-size", "19px")
                  .attr("fill", "white")
              
              // and to add the text labels
              svg
                .selectAll("vals")
                .data(root.leaves())
                .enter()
                .append("text")
                  .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
                  .attr("y", function(d){ return d.y0+35})    // +20 to adjust position (lower)
                  .text(function(d){ 
                    if(d.data.value>0.01){
                      return `${parseInt(d.data.value*100)}%` }})
                  .attr("font-size", "15px")
                  .attr("fill", "white")
                  .selectAll("text")
    
                  svg
                  .selectAll("titles")
                  .data(root.descendants().filter(function(d){return d.depth===1}))
                  .enter()
                  .append("text")
                    .attr("x", function(d){ return d.x0})
                    .attr("y", function(d){ return d.y0+21})
                    .text(function(d){ return d.data.name })
                    .attr("font-size", "12px")
                    .attr("fill",  function(d){ return color(d.data.name)} )
                
                // Add title for the 3 groups
                svg
                  .append("text")
                    .attr("x", 0)
                    .attr("y", 14)    // +20 to adjust position (lower)
      }
      else{
      }
    },[userData])

    return (
      <div style={{margin: '0px 20px'}} >
               <h4 style={{color:"#fcbf49"}}>Daily Pass / Fail Distribution</h4>
         <div id='my_dataviz' className="text-center mb-4">

        </div>
        <div id='my_tree'>
    
        </div>
      </div>
       
    )
}

export default Chart

