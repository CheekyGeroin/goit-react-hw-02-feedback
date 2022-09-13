import PropTypes from 'prop-types';
import { List, Item, Button  } from './FeedbackOptions.styled';


export const FeedbackOptions = ({ onGoodIncrement, onNeutralIncrement, onBadIncrement }) => {
    // const { goodIncrement, neutralIncrement, badIncrement } = options
    
    return (<div>
        <List>
            <Item><Button type="module" onClick={onGoodIncrement}>Good</Button></Item>
            <Item><Button type="module" onClick={onNeutralIncrement}>Neutral</Button></Item>
            <Item><Button type="module" onClick={onBadIncrement}>Bad</Button></Item>
        </List>
      </div>)
}

FeedbackOptions.propTypes = {
    onGoodIncrement: PropTypes.func.isRequired,
    onNeutralIncrement: PropTypes.func.isRequired,
    onBadIncrement: PropTypes.func.isRequired,
}