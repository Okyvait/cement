
let uniqueNodes = [...new Set(deps.nodes)];
const nodeArr = uniqueNodes.map((node, i) => ({ id: i, label: node }));
const nodes = new vis.DataSet(nodeArr);

const edgeArr = deps.edges.map((edge) => {
  const [from, to] = edge;
  const fromNode = nodeArr.find(node => node.label === from);
  const toNode = nodeArr.find(node => node.label === to);
  return {
    from: fromNode && fromNode.id,
    to: toNode && toNode.id,
  };
});
const edges = new vis.DataSet(edgeArr);

const container = document.getElementById('graph');
const data = {
  nodes,
  edges,
};
const options = {};

const network = new vis.Network(container, data, options);
// network.enableEditMode();