//Libraries
import PropTypes from 'prop-types';

//Hooks
import { useState, useRef } from "react";

//Components
import { Typography, Table as TableAntd, Input, Button, Space, Card } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";


//Assets


export default function Table(props) {

    const { Title, Text } = Typography;
    /**
     * States
     */
    const [searchText, setSearchText] = useState(''); // Search text
    const [searchedColumn, setSearchedColumn] = useState(''); // Search column


    /**
     * Hooks
     */
    const searchInput = useRef(null); // Ref for input


    /**
     * Execute search on table for each column
     * @param {*} selectedKeys Kyes selected
     * @param {Function} confirm 
     * @param {String} dataIndex Key or property of the object of data
     */
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    /**
     * Funciton to clear filters
     * @param {*} clearFilters 
     */
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    /**
     * Fucntion to get props for search in table
     * @param {String} dataIndex Key or property of the object of data
     * @returns 
     */
    const getColumnSearchProps = (dataIndex) => ({
        /**
         * Function of librarie antd
         * @param {*} param params of the function of antd 
         * @returns Component Dropdown Filter
         */
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : 'white',
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });


    const getColumns = ()  => {
        if( props.data?.length > 0 ){
            const columns = Object.keys(props.data[0]).map( key => {
                return {
                    title: key,
                    dataIndex: key,
                    key: key,
                    ...getColumnSearchProps(key),
                    sorter: (a, b) => a[key].length ? a[key].length - b[key].length: a[key] - b[key],
                    sortDirections: ['descend', 'ascend'],
                }
            })
            return columns;
        }
    }

    const getRows = () => {
        if( props.data?.length > 0 ){
            const rows = props.data.map( (item, index) => {
                return {
                    key: item.id ? item.id : index,
                    ...item
                }
            })
            return rows;
        }
    }

    return (
        <Card style={{ marginTop: '1rem', overflow: 'auto', ...props.styleCard }}>
            <TableAntd
                columns={props.data?.length > 0 ?  getColumns() : props.columns }
                dataSource={props.data?.length > 0 ? getRows() :  props.dataSource}
                pagination={{ 
                    pageSize: props.pageSize, 
                    total: props.data?.length > 0 ? props.data.length : props.dataSource.length, 
                    current: props.current,
                    position: ['bottomLeft']
                }}
                style={props.styleTable}
            />
        </Card>
    );

}

Table.propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.array,
    pageSize: PropTypes.number,
    pageSizeOptions: PropTypes.array,
}

Table.defaultProps = {
    columns: [],
    dataSource: [],
    pageSize: 10,
    current: 1,
    pageSizeOptions: [5, 10, 20],
}