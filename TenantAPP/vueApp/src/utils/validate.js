/* 帐号名检查 */
export function userCheck (data) {
  if (data.length === 0) {
    return false
  } else {
    const reg = /^[0-9a-zA_Z]+$/
    return reg.test(data)
  }
}

/* 帐号密码检查 */
export function passCheck (data) {
  const reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,18}$/
  return reg.test(data)
}
/* 格式化时间 */
export function formatTime (time) {
  const res = time.split('T', 1)
  return res
}

export function formatMAC (val) {
  let ret = ''
  for (let i = 0; i < 12; i++) {
    ret = ret + val.substring(i, i + 2)
    if (i < 10) {
      ret += '-'
    }
    i++
  }
  return ret
}
