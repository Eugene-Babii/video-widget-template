import dotenv from 'dotenv';
import fs from 'fs/promises'
import path from 'path';
import { widgetVideo } from './mock-data.js'

dotenv.config();

const dataKey = process.env.DATA_KEY

if(!dataKey){
  console.error('Error: Specify data key');
  process.exit(1)
}

const dataTemplate = '{{__VIDEO_JSON__}}'
const stringifyData = JSON.stringify(widgetVideo[dataKey]);

(async function(){
  let widgetScript = await fs.readFile('./video_widget.js', { encoding: 'utf-8' })
  widgetScript = widgetScript.replace(dataTemplate, stringifyData)

  await fs.writeFile(path.resolve('completed_widget.js'), widgetScript)
})()
  .then(() => console.log('Videos are injected'))