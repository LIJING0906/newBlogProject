export default {
    methods: {
        messageError(message) {
            this.$message({
                message,
                showClose: true,
                customClass: 'message-info-error'
            });
        },
        messageSuccess(message) {
            this.$message({
                message,
                showClose: true,
                customClass: 'message-info-success'
            });
        },
        messageWarning(message) {
            this.$message({
                message,
                showClose: true,
                customClass: 'message-info-warn'
            });
        }
    }
}
