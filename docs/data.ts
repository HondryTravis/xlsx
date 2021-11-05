
type RowIndex = number;
type ColumnIndex = number;



interface IView {
    width: number;
    height: number;
    zoom?: number;
}

interface ISheetData {
    view: IView
    merges: IMergence[] | null
    rows: IRows | null
    cols: []
}

interface IRows {
    [propertyKey: number]: IRowData
    length: number
}

interface IRowProps {
    height?: number;
    maxHeight?: number;
}

interface IRowData {
    cells: ICellData
    props: IRowProps | null
}

interface ICellData {
    [propertyKey: number]: ICell
}

interface ICell {
    text: string
}

interface IMergence {
    start: [RowIndex, ColumnIndex];
    end: [RowIndex, ColumnIndex];
}

interface ISpreadSheetFormat {
    [propertyKey: number]: string;
}

interface IWorkbookDataSource {
    SheetNames: string[]
    Sheets: ISheetData[]
    SSF: ISpreadSheetFormat
    Styles: ISheetStyles
}


export interface IFont {
    size: number
    color: string
    name: string
    bold?: boolean
    underline?: boolean
    italic?: boolean
}

interface ISheetStyles {
    Borders: []
    Fills: []
    Fonts: IFont[]
    NumberFormat: []
    Cells: []
}
