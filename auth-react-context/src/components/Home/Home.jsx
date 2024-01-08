import  { useContext } from 'react';
import { UserContext } from '../Provider/UserProviders';

const Home = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h2>This is home page</h2>
            {
                user && <span>{user.displayName}</span>
            }
        </div>
    );
};

export default Home;