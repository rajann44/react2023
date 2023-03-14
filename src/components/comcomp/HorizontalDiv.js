export default function HorizontalDiv(props){

    const styles = {
        hr_theme_slash_2: {
            display: 'flex'
        },
        hr_line: {
            width: '100%',
            position: 'relative',
            margin: '15px',
            borderBottom: '3px solid #000'
        },
        hr_text: {
            position: 'relative',
            top: '3px',
            color: '#4000FF'
        }
      };

    return(<div>
        <div class="hr-theme-slash-2" style={styles.hr_theme_slash_2}>
        <div class="hr-line" style={styles.hr_line}></div>
        <div class="hr-text" style={styles.hr_text}><b>{props.title}</b></div>
        <div class="hr-line" style={styles.hr_line}></div>
        </div>
    </div>);
}