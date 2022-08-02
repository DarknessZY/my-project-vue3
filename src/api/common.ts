import { createUpload, createDownload } from '@prequest/miniprogram-addon'
import { UploadResp } from './types'

class CommonService {
  // 上传文件
  static uploadFile(filePath: string) {
    const upload = createUpload(uni.uploadFile, {
      name: 'imgFile',
      filePath,
      formData: { fileName: 'testName' },
    })
    return upload<UploadResp>('/fileUpload/imgUpload')
  }
  // 下载文件
  static downloadFile(url: string) {
    const download = createDownload(uni.downloadFile, {
      url,
    })
    return download(url)
  }
}

export default CommonService