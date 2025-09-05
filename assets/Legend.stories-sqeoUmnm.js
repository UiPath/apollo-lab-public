import{r as s}from"./createChartContainer-DlCyyI4N.js";import{S as l}from"./showControlsConfig-BkXgCfWc.js";import{C as p,L as d}from"./Legend-Duf6jDAd.js";import"./_commonjsHelpers-CE1G-McA.js";import"./iframe-FpZ5geXM.js";import"./preload-helper-D9Z9MdNV.js";const i=(n,{usePalette:e,type:t})=>{const a=e?p.Blue:["red","blue","yellow","green","purple"],o=t==="sequential"?{colors:a,labels:["0","21.871"],title:"Number of items",alt:"This is a blue legend (so sad)",type:"sequential"}:{colors:["red","blue","yellow","green","purple"],labels:["Example","Example 2","Example 3","Example 4","Example 5"],alt:"This is a blue legend (so sad)",type:"ordinal"};new d({container:n,properties:o}).render()},c={usePalette:{name:"Use palette"},type:{name:"Type",options:["ordinal","sequential"],control:{type:"inline-radio"}}},f={title:"Legend",argTypes:{...c}},m={usePalette:!0,type:"ordinal"},r={render:n=>{const e=s();return document.body.appendChild(e),i(e,n),e},args:m,parameters:{...l}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const container = createChartContainer();
    document.body.appendChild(container);
    renderLegend(container, args);
    return container;
  },
  args: defaultProps,
  parameters: {
    ...SHOW_CONTROLS_CONFIG
  }
}`,...r.parameters?.docs?.source}}};const x=["Legend"];export{r as Legend,x as __namedExportsOrder,f as default};
