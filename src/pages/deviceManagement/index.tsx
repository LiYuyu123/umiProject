import styles from './index.less';
import {PageContainer} from '@ant-design/pro-layout';
export default function IndexPage(props:any) {
  return (
    <div>
      <div
        style={{
          background: '#F5F7FA',
        }}
      >
        <PageContainer>
          { props.children}
        </PageContainer>
      </div>
    </div>
  );
}
