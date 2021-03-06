import { LensterAttachment } from '@generated/lenstertypes'

const uploadAssetsToIPFS = async (data: any): Promise<LensterAttachment[]> => {
  try {
    const attachments = []
    for (let i = 0; i < data.length; i++) {
      let file = data.item(i)
      const formData = new FormData()
      formData.append('file', file, 'img')
      const upload = await fetch('https://ipfs.infura.io:5001/api/v0/add', {
        method: 'POST',
        body: formData
      })
      const { Hash }: { Hash: string } = await upload.json()
      attachments.push({
        item: `https://ipfs.io/ipfs/${Hash}`,
        type: file.type
      })
    }

    return attachments
  } catch {
    return []
  }
}
export const uploadAssetsToIPFSURI = async (
  data: any
): Promise<LensterAttachment[]> => {
  try {
    const attachments = []
    for (let i = 0; i < data.length; i++) {
      let file = data.item(i)
      const formData = new FormData()
      formData.append('file', file, 'img')
      const upload = await fetch('https://ipfs.infura.io:5001/api/v0/add', {
        method: 'POST',
        body: formData
      })
      const { Hash }: { Hash: string } = await upload.json()
      attachments.push({
        item: `https://ipfs.infura.io/ipfs/${Hash}`,
        type: file.type
      })
    }

    return attachments
  } catch {
    return []
  }
}
export const uploadAssetToIPFSfromBackend = async (
  data: any
): Promise<LensterAttachment[]> => {
  try {
    console.log(data)
    const attachments = []
    let file = data
    const formData = new FormData()
    formData.append('file', file, 'img')
    const upload = await fetch('https://ipfs.infura.io:5001/api/v0/add', {
      method: 'POST',
      body: formData
    })
    const { Hash }: { Hash: string } = await upload.json()
    attachments.push({
      item: `https://ipfs.infura.io/ipfs/${Hash}`,
      type: file.type
    })

    return attachments
  } catch {
    return []
  }
}

export default uploadAssetsToIPFS
