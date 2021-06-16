import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

function Header({ children, count, back, profile, local, history }) {
  const { goBack } = useHistory();

  const justifycontent = back || !children ? 'flex-start' : '';
  const styledProps = {profile, back, justifycontent}

  if (true) return (
    <Container {...styledProps}>
      {children ? children : (
          <>
            <div>
              <Link onClick={ goBack }>
                <FiArrowLeft size={'1.5rem'} />
              </Link>
            </div>
            
             <span>{count} {local}</span>
            
             <div />
          </>
        )}
    </Container>
  );
}

export default Header;