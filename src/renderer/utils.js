// 创建SVG
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

// 子节点挂载到父节点上
export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
