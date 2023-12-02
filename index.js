import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

try {
  const result = await fetch('scrimba-info.txt')
  const text = await result.text()
  
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
  })
  
  const output = await splitter.createDocuments([text])
  console.log(output)
} catch (err) {
  console.log(err)
}