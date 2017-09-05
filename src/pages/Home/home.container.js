import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './reducks/home.actions'
import Home from '../../components/Home'


const mapStateToProps = state => ({
    photos: state.home.photos,
})


const mapDispatchToProps = (dispatch) => (
    bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)