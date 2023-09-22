import styled from 'styled-components'
import './styles.css'


const HeaderContainer = styled.header`
    background-color: #3498db; /* Blue background color */
    color: white; /* Text color */
        padding: 20px 0; /* Adjust padding as needed */
        text-align: center;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background-color: ${(props) => props.theme["blue-600"]};

    ul {
        list-style: none;
        display: flex;
        gap: 1rem;
    }


    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        transition: color 0.3s ease; /* Smooth color transition on hover */
    }

    a:hover {
        color: #2980b9; /* Darker blue color on hover */
    }
`

const HeaderRed = styled(HeaderContainer)`
background-color: ${props => props.theme["red-500"]};
`

export function Header() {

    return(
        <HeaderContainer>
            <p>Eventos</p>

            <nav>
                <ul>
                    <li>
                        <a>Meus eventos</a>
                    </li>
                    <li>
                        <a>Crie seu evento</a>
                    </li>
                    <li>
                        <a>Login</a>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}