
export const fileUpload = async (file) => {

  if (!file) throw new Error('No files to upload')

  const cloudURL = 'https://api.cloudinary.com/v1_1/dsuz2gltn/upload'

  const formData = new FormData()

  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)

  try {

    const resp = await fetch(cloudURL, {
      method: 'POST',
      body: formData
    })

    console.log(resp)
    if (!resp.ok) throw new Error('Unable to upload image')

    const cloudResp = await resp.json()

    return cloudResp.secure_url

  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }

}