import React, { useState }  from 'react'
import { connect } from 'dva'
import { Row, Col, Form, Upload, message } from 'antd'
import { InboxOutlined,CloseCircleOutlined } from '@ant-design/icons';
import {Map} from 'immutable'
import { injectIntl } from 'react-intl';
import styles from '../index.less';

const Dragger = Upload.Dragger;

const CommonConfigSelector=({onChange, value, intl: { formatMessage }})=>{
    
    const [id, setId] = useState(value);

    const deleteBtn=()=>{
      setId('')
      contentChange();
    }

    //内容有变化，实时保存
    const contentChange=(content)=>{
      if (onChange) {
        onChange(content);
      }
    }
    
    const props = {
        name: 'imgFile',
        fileList:[],
        listType:"picture-card",
        beforeUpload: (file) => {
          if (file.type && file.type.substring(0, 6) == 'image/') {
            if(file.size <= 512*1024){
              if(window.FileReader) {
                var fr = new FileReader();
                fr.onloadend = (e)=>{
                  setId(e.target.result)
                  contentChange(e.target.result);
                };
                fr.readAsDataURL(file);
              }
            }else{
              message.warning(formatMessage({ id: 'Teach.maxPictureMemoryIs512KB' }));
            }
          }else{
            message.warning(formatMessage({ id: 'whiteBoard.cntuploadFormat' }));
          }
          return false;
        }
        
    };

    return (
      <div className={styles.InputPicture}>
        <Dragger {...props}>
          {id?
          <img src={id} width="100x" height="100" />
          :
          <div>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或拖拽图片到此区域</p>
            <p className="ant-upload-hint">图片大小不能超过512KB</p>
          </div>
          }
        </Dragger>
        {id?<a className={styles.InputPictureDelete} onClick={deleteBtn}><CloseCircleOutlined /></a>:null}
      </div>
    );
    
  }

  export default connect(({ 
    app
  }) => ({ 
    i18n:app.get('i18n')
  }))(injectIntl(CommonConfigSelector))