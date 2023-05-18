import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Card from './Card';



const Subtabs = () => {

    const [toy, setToys] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    let dogCategory = "a";
    let catCategory = "b";
    let dinosaurCategory = "c";
    let unicornCategory = "d";

    useEffect(() => {
        fetch('/chefs.json')
            .then(res => res.json())
            .then(data => setToys(data));

    }, [])

    const dog = toy.filter(toys => toys.category === dogCategory)
    const cat = toy.filter(toys => toys.category === catCategory)
    const dinosaur = toy.filter(toys => toys.category === dinosaurCategory)
    const unicorn = toy.filter(toys => toys.category === unicornCategory)

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className=" flex m-3 justify-between">
                <Tab> <button>Dog</button></Tab>
                <Tab>Cat</Tab>
                <Tab>Dinosur</Tab>
                <Tab>Unicorn</Tab>
            </TabList>
            <TabPanel>
                {

                    dog?.map((toys) => <Card key={toys.id} toys={toys} ></Card>)
                }
            </TabPanel>
            <TabPanel>
                {

                    cat?.map((toys) => <Card key={toys.id} toys={toys} ></Card>)
                }
            </TabPanel>
            <TabPanel>
                {

                    dinosaur?.map((toys) => <Card key={toys.id} toys={toys} ></Card>)
                }
            </TabPanel>
            <TabPanel>
                {

                    unicorn?.map((toys) => <Card key={toys.id} toys={toys} ></Card>)
                }
            </TabPanel>
        </Tabs>
    );

};

export default Subtabs;