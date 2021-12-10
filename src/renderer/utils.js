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

// strokeWidth -> stroke-width
export function applyAttributes(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    // 这里需要把类似 strokeWidth 的属性转换成 stroke-width 的形式
    // https://juejin.cn/post/6844903487155732494
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, value);
  }
}

export function applyTransform(element, transform) {
  const oldTransform = element.getAttribute('transform') || '';
  // 将新的变换指定到后面的变换，这里需要字符串拼接
  const prefix = oldTransform.length ? `${oldTransform} ` : '';
  element.setAttribute('transform', `${prefix}${transform}`);
}
