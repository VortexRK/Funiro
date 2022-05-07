import React from "react"
import styled from "styled-components"

const Cart = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={props.className} onClick={props.showCart}>
    <path d="M1 2.5H2.65424C3.13263 2.5 3.37183 2.5 3.56628 2.58674C3.73771 2.66321 3.88415 2.78638 3.98886 2.94217C4.10763 3.11888 4.14862 3.35454 4.23058 3.82585L4.6087 6M4.6087 6L5.49173 11.0774C5.67091 12.1077 5.7605 12.6228 6.02583 12.9939C6.25945 13.3207 6.58606 13.5695 6.96311 13.708C7.39133 13.8654 7.91176 13.815 8.95264 13.7143L18.614 12.7793C19.6298 12.681 20.1378 12.6318 20.5221 12.4033C20.8653 12.1993 21.1395 11.8972 21.3095 11.536C21.5 11.1314 21.5 10.6211 21.5 9.6005V9.6005C21.5 8.51582 21.5 7.97348 21.2922 7.55394C21.1068 7.17971 20.809 6.8729 20.4404 6.67654C20.0272 6.4564 19.4851 6.44036 18.4009 6.40826L4.6087 6Z" stroke="#262F56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.5" cy="19" r="2" stroke="#262F56" strokeWidth="1.8"/>
    <circle cx="18" cy="19" r="2" stroke="#262F56" strokeWidth="1.8"/>
  </svg>
)

export default styled(Cart)`
  /* margin-right: 30px; */
  cursor: pointer;
`
