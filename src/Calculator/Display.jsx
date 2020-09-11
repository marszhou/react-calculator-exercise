import React from 'react'
import PropTypes from 'prop-types'

/**
 * 将输入框数据转换为字符串
 * @param Object field
 * @return String
 */
function fieldToString(field) {
  var value = ''
  if (!fieldIsEmpty(field)) {
    if (field.i) {
      value += field.i
    }
    if (field.hasFloat) {
      value += '.'
    }
    if (field.f) {
      value += field.f
    }
  }
  return value || '0'
}
/**
 * 测试输入数字是否为空
 * @param Object field - 输入框数据
 * @return Boolean
 */
export function fieldIsEmpty(field) {
  return !field.i && !field.f && !field.hasFloat
}

function getResult(value) {
  var showField = null
  if (!value.operator) {
    showField = value.x
  } else if (fieldIsEmpty(value.y)) {
    showField = value.x
  } else {
    showField = value.y
  }
  return fieldToString(showField)
}

const Display = ({ value }) => {
  return <li className="size4 input">{getResult(value)}</li>
}

Display.propTypes = {
  value: PropTypes.object,
}

export default Display
