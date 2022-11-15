export function alertMsgTip(type, msg, showClose, vm) {
  return vm.$message({
    showClose: showClose,
    type: type,
    message: msg,
    duration: 3.5 * 1000
  })
}
