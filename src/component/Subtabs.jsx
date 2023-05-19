import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Card from './Card';



const Subtabs = () => {

    const [toy, setToys] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    let dogCategory = "Dog";
    let catCategory = "Cat";
    let dinosaurCategory = "Teddy";
    let unicornCategory = "Unicorn";

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data));

    }, [])

    const dog = toy.filter(toys => toys.subcategory === dogCategory)
    const cat = toy.filter(toys => toys.subcategory === catCategory)
    const dinosaur = toy.filter(toys => toys.subcategory === dinosaurCategory)
    const unicorn = toy.filter(toys => toys.subcategory === unicornCategory)

    return (
        <>
         <h1 className='text-center text-5xl font-bold p-7'>SHOP CATEGORY</h1>
         <div  className="">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className=" flex m-3 justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <Tab> <button className='btn btn-wide' >Dog</button></Tab>
                <Tab> <button className='btn btn-wide'>Cat</button></Tab>
                <Tab><button className='btn btn-wide'>Dinosur</button></Tab>
                <Tab><button className='btn btn-wide'>Unicorn</button></Tab>
            </TabList>
            <TabPanel className="flex justify-center gap-28 p-3">
                {

                    dog?.map((toys) => <Card key={toys._id} toys={toys} ></Card>)
                }
            </TabPanel>
            <TabPanel className="flex justify-center gap-28 p-3">
                {

                    cat?.map((toys) => <Card key={toys._id} toys={toys} ></Card>)
                }
            </TabPanel>
            <TabPanel className="flex justify-center gap-28  p-3">
                {

                    dinosaur?.map((toys) => <Card key={toys._id} toys={toys} ></Card>)
                }
            </TabPanel>
            <TabPanel className="flex justify-center gap-28  p-3">
                {

                    unicorn?.map((toys) => <Card key={toys.id} toys={toys} ></Card>)
                }
            </TabPanel>
        </Tabs>
        </div>
        </>
    );

};

export default Subtabs;