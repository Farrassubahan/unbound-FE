import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Card from '../../components/Card';

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <h1 className="text-2xl font-bold mb-4">Welcome to Unbound</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                    <h2 className="font-semibold">Post 1</h2>
                    <p>Ini contoh posting di Home Page.</p>
                </Card>
                <Card>
                    <h2 className="font-semibold">Post 2</h2>
                    <p>Ini contoh posting di Home Page.</p>
                </Card>
            </div> 
        </MainLayout>
    );
};

export default HomePage;
