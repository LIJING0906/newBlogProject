<template>
    <div class="mixin" style="margin-top:50px;">
        <el-button @click="messageTips('success')">点击弹出成功的消息提示</el-button>
        <el-button @click="messageTips('error')">点击弹出失败的消息提示</el-button>
        <el-button @click="messageTips('warn')">点击弹出警告的消息提示</el-button>
    </div>
</template>
<script>
import message from '@/mixins/message';
export default {
    mixins: [message],
    methods: {
        messageTips(type) {
            if (type === 'success') {
                this.messageSuccess('成功');
            } else if (type === 'error') {
                this.messageError('失败');
            } else {
                this.messageError('警告');
            }
        }
    }
}
</script>
