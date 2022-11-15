export function messageBox(vm, distCanceAndClose, confirmBtnText, showCancelBtn, type, msgBoxTipInfo, callback) {
  return vm.$confirm(msgBoxTipInfo, '提示', {
    distinguishCancelAndClose: distCanceAndClose,
    confirmButtonText: confirmBtnText,
    cancelButtonTex: "取消",
    showCancelButton: showCancelBtn,
    type: type
  }).then(() => {
    callback()
  }).catch((action) => {
    vm.$message({
      type: "info",
      message: "已取消"
    })
  })
}
