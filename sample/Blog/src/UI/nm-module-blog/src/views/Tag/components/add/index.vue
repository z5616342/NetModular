<template>
  <nm-form-dialog ref="form" v-bind="form" v-on="on" :visible.sync="visible_">
    <el-row>
      <el-col :span="20" :offset="1">
        <el-form-item label="名称：" prop="name">
          <el-input v-model="form.model.name" clearable/>
        </el-form-item>
      </el-col>
    </el-row>
  </nm-form-dialog>
</template>
<script>
import api from '../../../../api/Tag'
import { mixins } from 'nm-lib-skins'
export default {
  mixins: [mixins.dialog],
  data () {
    return {
      form: {
        title: '添加标签',
        icon: 'add',
        action: api.add,
        model: {
          /** 名称 */
          name: ''
        },
        rules: {
        }
      },
      on: {
        success: this.onSuccess,
        open: this.onOpen
      }
    }
  },
  methods: {
    onSuccess () {
      this.$emit('success')
    },
    onOpen () {
      this.$nextTick(() => {
        this.$refs.form.reset()
      })
    }
  }
}
</script>
