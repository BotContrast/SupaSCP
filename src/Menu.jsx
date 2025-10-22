import Button from 'react-bootstrap/Button';

function Menu({scps, onSelect})
{
    return(
        <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', padding: 0 }}>
            {
                scps.map(
                    (scp, index) => (
                        <li key={index} style={{ marginRight: '10px', cursor: 'pointer' }} onClick={()=>onSelect(scp)}>
                            
                            <Button variant='flat'>
                                {scp.Name}
                            </Button>     
                        </li>
                    )
                )
            }
        </ul>
    )
}

export default Menu;