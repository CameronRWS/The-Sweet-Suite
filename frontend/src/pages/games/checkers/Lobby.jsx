
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Lobby ({createGame, displayname, joinGame, games}) {
    return(
        <div>
            <div>
                <Button
                variant="primary"
                onClick={() => createGame(displayname)}
                >
                    Create New Game
                </Button>
            </div>

            <Table striped bordered>
                <tread>
                    <tr>
                        <th>Game Name</th>
                        <th>Number of Players</th>
                        <th></th>
                    </tr>
                </tread>
                <tbody>
                    {games.length === 0 && (
                        <tr>
                            <td colSpan="3">No games created yet</td>
                        </tr>
                    )}
                    {games.map((game) => (
                        <tr key={game.name}>
                            <td>{game.name}</td>
                            <td>{game.numberOfPlayers}</td>
                            <td>
                                <Button
                                onClick={() => joinGame(game.id)}
                                variant = "link"
                                >
                                    Join Game
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
