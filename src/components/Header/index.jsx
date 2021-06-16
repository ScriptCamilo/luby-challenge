import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

function Header({ children, avatarUrl, count, back, profile, local }) {
  const justifycontent = back || !children ? 'flex-start' : '';
  const styledProps = {profile, back, justifycontent}

  if (true) return (
    <Container {...styledProps}>
      {children ? children : (
          <>
            <div>
              <Link>
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