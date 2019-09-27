import styled from 'styled-components';

export const Container = styled.div`
  max-width: 640px;
  margin: 48px auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const Title = styled.div`
  font-size: 24px;
  margin: 0 16px;
`;

export const PaginationButton = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  flex-shrink: 0;
`;

export const Appointments = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

export const Appointment = styled.div`
  margin-bottom: 24px;
  padding: 24px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
  opacity: ${props => (props.isPast ? 0.6 : 1)};

  time {
    display: block;
    margin-bottom: 4px;
    color: ${props => (props.isAvailable ? '#999' : '#f36')};
    font-size: 20px;
    font-weight: normal;
  }

  small {
    display: block;
    color: ${props => (props.isAvailable ? '#999' : '#666')};
  }
`;
