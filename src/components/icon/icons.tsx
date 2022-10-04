import { defineComponent, HTMLAttributes } from 'vue';
import { Icon, iconProps, IIconProps } from './icon';
export * from './icon';
import {
  Accessibility,
  AccessibilityOutline,
  AccessibilitySharp,
  Add,
  AddCircle,
  AddCircleOutline,
  AddCircleSharp,
  AddOutline,
  AddSharp,
  Airplane,
  AirplaneOutline,
  AirplaneSharp,
  Alarm,
  AlarmOutline,
  AlarmSharp,
  Albums,
  AlbumsOutline,
  AlbumsSharp,
  Alert,
  AlertCircle,
  AlertCircleOutline,
  AlertCircleSharp,
  AlertOutline,
  AlertSharp,
  AmericanFootball,
  AmericanFootballOutline,
  AmericanFootballSharp,
  Analytics,
  AnalyticsOutline,
  AnalyticsSharp,
  Aperture,
  ApertureOutline,
  ApertureSharp,
  Apps,
  AppsOutline,
  AppsSharp,
  Archive,
  ArchiveOutline,
  ArchiveSharp,
  ArrowBack,
  ArrowBackCircle,
  ArrowBackCircleOutline,
  ArrowBackCircleSharp,
  ArrowBackOutline,
  ArrowBackSharp,
  ArrowDown,
  ArrowDownCircle,
  ArrowDownCircleOutline,
  ArrowDownCircleSharp,
  ArrowDownOutline,
  ArrowDownSharp,
  ArrowForward,
  ArrowForwardCircle,
  ArrowForwardCircleOutline,
  ArrowForwardCircleSharp,
  ArrowForwardOutline,
  ArrowForwardSharp,
  ArrowRedo,
  ArrowRedoCircle,
  ArrowRedoCircleOutline,
  ArrowRedoCircleSharp,
  ArrowRedoOutline,
  ArrowRedoSharp,
  ArrowUndo,
  ArrowUndoCircle,
  ArrowUndoCircleOutline,
  ArrowUndoCircleSharp,
  ArrowUndoOutline,
  ArrowUndoSharp,
  ArrowUp,
  ArrowUpCircle,
  ArrowUpCircleOutline,
  ArrowUpCircleSharp,
  ArrowUpOutline,
  ArrowUpSharp,
  At,
  AtCircle,
  AtCircleOutline,
  AtCircleSharp,
  AtOutline,
  AtSharp,
  Attach,
  AttachOutline,
  AttachSharp,
  Backspace,
  BackspaceOutline,
  BackspaceSharp,
  Bag,
  BagAdd,
  BagAddOutline,
  BagAddSharp,
  BagCheck,
  BagCheckOutline,
  BagCheckSharp,
  BagHandle,
  BagHandleOutline,
  BagHandleSharp,
  BagOutline,
  BagRemove,
  BagRemoveOutline,
  BagRemoveSharp,
  BagSharp,
  Balloon,
  BalloonOutline,
  BalloonSharp,
  Ban,
  BanOutline,
  BanSharp,
  Bandage,
  BandageOutline,
  BandageSharp,
  BarChart,
  BarChartOutline,
  BarChartSharp,
  Barbell,
  BarbellOutline,
  BarbellSharp,
  Barcode,
  BarcodeOutline,
  BarcodeSharp,
  Baseball,
  BaseballOutline,
  BaseballSharp,
  Basket,
  BasketOutline,
  BasketSharp,
  Basketball,
  BasketballOutline,
  BasketballSharp,
  BatteryCharging,
  BatteryChargingOutline,
  BatteryChargingSharp,
  BatteryDead,
  BatteryDeadOutline,
  BatteryDeadSharp,
  BatteryFull,
  BatteryFullOutline,
  BatteryFullSharp,
  BatteryHalf,
  BatteryHalfOutline,
  BatteryHalfSharp,
  Beaker,
  BeakerOutline,
  BeakerSharp,
  Bed,
  BedOutline,
  BedSharp,
  Beer,
  BeerOutline,
  BeerSharp,
  Bicycle,
  BicycleOutline,
  BicycleSharp,
  Bluetooth,
  BluetoothOutline,
  BluetoothSharp,
  Boat,
  BoatOutline,
  BoatSharp,
  Body,
  BodyOutline,
  BodySharp,
  Bonfire,
  BonfireOutline,
  BonfireSharp,
  Book,
  BookOutline,
  BookSharp,
  Bookmark,
  BookmarkOutline,
  BookmarkSharp,
  Bookmarks,
  BookmarksOutline,
  BookmarksSharp,
  BowlingBall,
  BowlingBallOutline,
  BowlingBallSharp,
  Briefcase,
  BriefcaseOutline,
  BriefcaseSharp,
  Browsers,
  BrowsersOutline,
  BrowsersSharp,
  Brush,
  BrushOutline,
  BrushSharp,
  Bug,
  BugOutline,
  BugSharp,
  Build,
  BuildOutline,
  BuildSharp,
  Bulb,
  BulbOutline,
  BulbSharp,
  Bus,
  BusOutline,
  BusSharp,
  Business,
  BusinessOutline,
  BusinessSharp,
  Cafe,
  CafeOutline,
  CafeSharp,
  Calculator,
  CalculatorOutline,
  CalculatorSharp,
  Calendar,
  CalendarClear,
  CalendarClearOutline,
  CalendarClearSharp,
  CalendarNumber,
  CalendarNumberOutline,
  CalendarNumberSharp,
  CalendarOutline,
  CalendarSharp,
  Call,
  CallOutline,
  CallSharp,
  Camera,
  CameraOutline,
  CameraReverse,
  CameraReverseOutline,
  CameraReverseSharp,
  CameraSharp,
  Car,
  CarOutline,
  CarSharp,
  CarSport,
  CarSportOutline,
  CarSportSharp,
  Card,
  CardOutline,
  CardSharp,
  CaretBack,
  CaretBackCircle,
  CaretBackCircleOutline,
  CaretBackCircleSharp,
  CaretBackOutline,
  CaretBackSharp,
  CaretDown,
  CaretDownCircle,
  CaretDownCircleOutline,
  CaretDownCircleSharp,
  CaretDownOutline,
  CaretDownSharp,
  CaretForward,
  CaretForwardCircle,
  CaretForwardCircleOutline,
  CaretForwardCircleSharp,
  CaretForwardOutline,
  CaretForwardSharp,
  CaretUp,
  CaretUpCircle,
  CaretUpCircleOutline,
  CaretUpCircleSharp,
  CaretUpOutline,
  CaretUpSharp,
  Cart,
  CartOutline,
  CartSharp,
  Cash,
  CashOutline,
  CashSharp,
  Cellular,
  CellularOutline,
  CellularSharp,
  Chatbox,
  ChatboxEllipses,
  ChatboxEllipsesOutline,
  ChatboxEllipsesSharp,
  ChatboxOutline,
  ChatboxSharp,
  Chatbubble,
  ChatbubbleEllipses,
  ChatbubbleEllipsesOutline,
  ChatbubbleEllipsesSharp,
  ChatbubbleOutline,
  ChatbubbleSharp,
  Chatbubbles,
  ChatbubblesOutline,
  ChatbubblesSharp,
  Checkbox,
  CheckboxOutline,
  CheckboxSharp,
  Checkmark,
  CheckmarkCircle,
  CheckmarkCircleOutline,
  CheckmarkCircleSharp,
  CheckmarkDone,
  CheckmarkDoneCircle,
  CheckmarkDoneCircleOutline,
  CheckmarkDoneCircleSharp,
  CheckmarkDoneOutline,
  CheckmarkDoneSharp,
  CheckmarkOutline,
  CheckmarkSharp,
  ChevronBack,
  ChevronBackCircle,
  ChevronBackCircleOutline,
  ChevronBackCircleSharp,
  ChevronBackOutline,
  ChevronBackSharp,
  ChevronDown,
  ChevronDownCircle,
  ChevronDownCircleOutline,
  ChevronDownCircleSharp,
  ChevronDownOutline,
  ChevronDownSharp,
  ChevronForward,
  ChevronForwardCircle,
  ChevronForwardCircleOutline,
  ChevronForwardCircleSharp,
  ChevronForwardOutline,
  ChevronForwardSharp,
  ChevronUp,
  ChevronUpCircle,
  ChevronUpCircleOutline,
  ChevronUpCircleSharp,
  ChevronUpOutline,
  ChevronUpSharp,
  Clipboard,
  ClipboardOutline,
  ClipboardSharp,
  Close,
  CloseCircle,
  CloseCircleOutline,
  CloseCircleSharp,
  CloseOutline,
  CloseSharp,
  Cloud,
  CloudCircle,
  CloudCircleOutline,
  CloudCircleSharp,
  CloudDone,
  CloudDoneOutline,
  CloudDoneSharp,
  CloudDownload,
  CloudDownloadOutline,
  CloudDownloadSharp,
  CloudOffline,
  CloudOfflineOutline,
  CloudOfflineSharp,
  CloudOutline,
  CloudSharp,
  CloudUpload,
  CloudUploadOutline,
  CloudUploadSharp,
  Cloudy,
  CloudyNight,
  CloudyNightOutline,
  CloudyNightSharp,
  CloudyOutline,
  CloudySharp,
  Code,
  CodeDownload,
  CodeDownloadOutline,
  CodeDownloadSharp,
  CodeOutline,
  CodeSharp,
  CodeSlash,
  CodeSlashOutline,
  CodeSlashSharp,
  CodeWorking,
  CodeWorkingOutline,
  CodeWorkingSharp,
  Cog,
  CogOutline,
  CogSharp,
  ColorFill,
  ColorFillOutline,
  ColorFillSharp,
  ColorFilter,
  ColorFilterOutline,
  ColorFilterSharp,
  ColorPalette,
  ColorPaletteOutline,
  ColorPaletteSharp,
  ColorWand,
  ColorWandOutline,
  ColorWandSharp,
  Compass,
  CompassOutline,
  CompassSharp,
  Construct,
  ConstructOutline,
  ConstructSharp,
  Contract,
  ContractOutline,
  ContractSharp,
  Contrast,
  ContrastOutline,
  ContrastSharp,
  Copy,
  CopyOutline,
  CopySharp,
  Create,
  CreateOutline,
  CreateSharp,
  Crop,
  CropOutline,
  CropSharp,
  Cube,
  CubeOutline,
  CubeSharp,
  Cut,
  CutOutline,
  CutSharp,
  Desktop,
  DesktopOutline,
  DesktopSharp,
  Diamond,
  DiamondOutline,
  DiamondSharp,
  Dice,
  DiceOutline,
  DiceSharp,
  Disc,
  DiscOutline,
  DiscSharp,
  Document,
  DocumentAttach,
  DocumentAttachOutline,
  DocumentAttachSharp,
  DocumentLock,
  DocumentLockOutline,
  DocumentLockSharp,
  DocumentOutline,
  DocumentSharp,
  DocumentText,
  DocumentTextOutline,
  DocumentTextSharp,
  Documents,
  DocumentsOutline,
  DocumentsSharp,
  Download,
  DownloadOutline,
  DownloadSharp,
  Duplicate,
  DuplicateOutline,
  DuplicateSharp,
  Ear,
  EarOutline,
  EarSharp,
  Earth,
  EarthOutline,
  EarthSharp,
  Easel,
  EaselOutline,
  EaselSharp,
  Egg,
  EggOutline,
  EggSharp,
  Ellipse,
  EllipseOutline,
  EllipseSharp,
  EllipsisHorizontal,
  EllipsisHorizontalCircle,
  EllipsisHorizontalCircleOutline,
  EllipsisHorizontalCircleSharp,
  EllipsisHorizontalOutline,
  EllipsisHorizontalSharp,
  EllipsisVertical,
  EllipsisVerticalCircle,
  EllipsisVerticalCircleOutline,
  EllipsisVerticalCircleSharp,
  EllipsisVerticalOutline,
  EllipsisVerticalSharp,
  Enter,
  EnterOutline,
  EnterSharp,
  Exit,
  ExitOutline,
  ExitSharp,
  Expand,
  ExpandOutline,
  ExpandSharp,
  ExtensionPuzzle,
  ExtensionPuzzleOutline,
  ExtensionPuzzleSharp,
  Eye,
  EyeOff,
  EyeOffOutline,
  EyeOffSharp,
  EyeOutline,
  EyeSharp,
  Eyedrop,
  EyedropOutline,
  EyedropSharp,
  FastFood,
  FastFoodOutline,
  FastFoodSharp,
  Female,
  FemaleOutline,
  FemaleSharp,
  FileTray,
  FileTrayFull,
  FileTrayFullOutline,
  FileTrayFullSharp,
  FileTrayOutline,
  FileTraySharp,
  FileTrayStacked,
  FileTrayStackedOutline,
  FileTrayStackedSharp,
  Film,
  FilmOutline,
  FilmSharp,
  Filter,
  FilterCircle,
  FilterCircleOutline,
  FilterCircleSharp,
  FilterOutline,
  FilterSharp,
  FingerPrint,
  FingerPrintOutline,
  FingerPrintSharp,
  Fish,
  FishOutline,
  FishSharp,
  Fitness,
  FitnessOutline,
  FitnessSharp,
  Flag,
  FlagOutline,
  FlagSharp,
  Flame,
  FlameOutline,
  FlameSharp,
  Flash,
  FlashOff,
  FlashOffOutline,
  FlashOffSharp,
  FlashOutline,
  FlashSharp,
  Flashlight,
  FlashlightOutline,
  FlashlightSharp,
  Flask,
  FlaskOutline,
  FlaskSharp,
  Flower,
  FlowerOutline,
  FlowerSharp,
  Folder,
  FolderOpen,
  FolderOpenOutline,
  FolderOpenSharp,
  FolderOutline,
  FolderSharp,
  Football,
  FootballOutline,
  FootballSharp,
  Footsteps,
  FootstepsOutline,
  FootstepsSharp,
  Funnel,
  FunnelOutline,
  FunnelSharp,
  GameController,
  GameControllerOutline,
  GameControllerSharp,
  Gift,
  GiftOutline,
  GiftSharp,
  GitBranch,
  GitBranchOutline,
  GitBranchSharp,
  GitCommit,
  GitCommitOutline,
  GitCommitSharp,
  GitCompare,
  GitCompareOutline,
  GitCompareSharp,
  GitMerge,
  GitMergeOutline,
  GitMergeSharp,
  GitNetwork,
  GitNetworkOutline,
  GitNetworkSharp,
  GitPullRequest,
  GitPullRequestOutline,
  GitPullRequestSharp,
  Glasses,
  GlassesOutline,
  GlassesSharp,
  Globe,
  GlobeOutline,
  GlobeSharp,
  Golf,
  GolfOutline,
  GolfSharp,
  Grid,
  GridOutline,
  GridSharp,
  Hammer,
  HammerOutline,
  HammerSharp,
  HandLeft,
  HandLeftOutline,
  HandLeftSharp,
  HandRight,
  HandRightOutline,
  HandRightSharp,
  Happy,
  HappyOutline,
  HappySharp,
  HardwareChip,
  HardwareChipOutline,
  HardwareChipSharp,
  Headset,
  HeadsetOutline,
  HeadsetSharp,
  Heart,
  HeartCircle,
  HeartCircleOutline,
  HeartCircleSharp,
  HeartDislike,
  HeartDislikeCircle,
  HeartDislikeCircleOutline,
  HeartDislikeCircleSharp,
  HeartDislikeOutline,
  HeartDislikeSharp,
  HeartHalf,
  HeartHalfOutline,
  HeartHalfSharp,
  HeartOutline,
  HeartSharp,
  Help,
  HelpBuoy,
  HelpBuoyOutline,
  HelpBuoySharp,
  HelpCircle,
  HelpCircleOutline,
  HelpCircleSharp,
  HelpOutline,
  HelpSharp,
  Home,
  HomeOutline,
  HomeSharp,
  Hourglass,
  HourglassOutline,
  HourglassSharp,
  IceCream,
  IceCreamOutline,
  IceCreamSharp,
  IdCard,
  IdCardOutline,
  IdCardSharp,
  Image,
  ImageOutline,
  ImageSharp,
  Images,
  ImagesOutline,
  ImagesSharp,
  Infinite,
  InfiniteOutline,
  InfiniteSharp,
  Information,
  InformationCircle,
  InformationCircleOutline,
  InformationCircleSharp,
  InformationOutline,
  InformationSharp,
  InvertMode,
  InvertModeOutline,
  InvertModeSharp,
  Journal,
  JournalOutline,
  JournalSharp,
  Key,
  KeyOutline,
  KeySharp,
  Keypad,
  KeypadOutline,
  KeypadSharp,
  Language,
  LanguageOutline,
  LanguageSharp,
  Laptop,
  LaptopOutline,
  LaptopSharp,
  Layers,
  LayersOutline,
  LayersSharp,
  Leaf,
  LeafOutline,
  LeafSharp,
  Library,
  LibraryOutline,
  LibrarySharp,
  Link,
  LinkOutline,
  LinkSharp,
  List,
  ListCircle,
  ListCircleOutline,
  ListCircleSharp,
  ListOutline,
  ListSharp,
  Locate,
  LocateOutline,
  LocateSharp,
  Location,
  LocationOutline,
  LocationSharp,
  LockClosed,
  LockClosedOutline,
  LockClosedSharp,
  LockOpen,
  LockOpenOutline,
  LockOpenSharp,
  LogIn,
  LogInOutline,
  LogInSharp,
  LogOut,
  LogOutOutline,
  LogOutSharp,
  LogoAlipay,
  LogoAmazon,
  LogoAmplify,
  LogoAndroid,
  LogoAngular,
  LogoApple,
  LogoAppleAppstore,
  LogoAppleAr,
  LogoBehance,
  LogoBitbucket,
  LogoBitcoin,
  LogoBuffer,
  LogoCapacitor,
  LogoChrome,
  LogoClosedCaptioning,
  LogoCodepen,
  LogoCss3,
  LogoDesignernews,
  LogoDeviantart,
  LogoDiscord,
  LogoDocker,
  LogoDribbble,
  LogoDropbox,
  LogoEdge,
  LogoElectron,
  LogoEuro,
  LogoFacebook,
  LogoFigma,
  LogoFirebase,
  LogoFirefox,
  LogoFlickr,
  LogoFoursquare,
  LogoGithub,
  LogoGitlab,
  LogoGoogle,
  LogoGooglePlaystore,
  LogoHackernews,
  LogoHtml5,
  LogoInstagram,
  LogoIonic,
  LogoIonitron,
  LogoJavascript,
  LogoLaravel,
  LogoLinkedin,
  LogoMarkdown,
  LogoMastodon,
  LogoMedium,
  LogoMicrosoft,
  LogoNoSmoking,
  LogoNodejs,
  LogoNpm,
  LogoOctocat,
  LogoPaypal,
  LogoPinterest,
  LogoPlaystation,
  LogoPwa,
  LogoPython,
  LogoReact,
  LogoReddit,
  LogoRss,
  LogoSass,
  LogoSkype,
  LogoSlack,
  LogoSnapchat,
  LogoSoundcloud,
  LogoStackoverflow,
  LogoSteam,
  LogoStencil,
  LogoTableau,
  LogoTiktok,
  LogoTumblr,
  LogoTux,
  LogoTwitch,
  LogoTwitter,
  LogoUsd,
  LogoVenmo,
  LogoVercel,
  LogoVimeo,
  LogoVk,
  LogoVue,
  LogoWebComponent,
  LogoWechat,
  LogoWhatsapp,
  LogoWindows,
  LogoWordpress,
  LogoXbox,
  LogoXing,
  LogoYahoo,
  LogoYen,
  LogoYoutube,
  Magnet,
  MagnetOutline,
  MagnetSharp,
  Mail,
  MailOpen,
  MailOpenOutline,
  MailOpenSharp,
  MailOutline,
  MailSharp,
  MailUnread,
  MailUnreadOutline,
  MailUnreadSharp,
  Male,
  MaleFemale,
  MaleFemaleOutline,
  MaleFemaleSharp,
  MaleOutline,
  MaleSharp,
  Man,
  ManOutline,
  ManSharp,
  Map,
  MapOutline,
  MapSharp,
  Medal,
  MedalOutline,
  MedalSharp,
  Medical,
  MedicalOutline,
  MedicalSharp,
  Medkit,
  MedkitOutline,
  MedkitSharp,
  Megaphone,
  MegaphoneOutline,
  MegaphoneSharp,
  Menu,
  MenuOutline,
  MenuSharp,
  Mic,
  MicCircle,
  MicCircleOutline,
  MicCircleSharp,
  MicOff,
  MicOffCircle,
  MicOffCircleOutline,
  MicOffCircleSharp,
  MicOffOutline,
  MicOffSharp,
  MicOutline,
  MicSharp,
  Moon,
  MoonOutline,
  MoonSharp,
  Move,
  MoveOutline,
  MoveSharp,
  MusicalNote,
  MusicalNoteOutline,
  MusicalNoteSharp,
  MusicalNotes,
  MusicalNotesOutline,
  MusicalNotesSharp,
  Navigate,
  NavigateCircle,
  NavigateCircleOutline,
  NavigateCircleSharp,
  NavigateOutline,
  NavigateSharp,
  Newspaper,
  NewspaperOutline,
  NewspaperSharp,
  Notifications,
  NotificationsCircle,
  NotificationsCircleOutline,
  NotificationsCircleSharp,
  NotificationsOff,
  NotificationsOffCircle,
  NotificationsOffCircleOutline,
  NotificationsOffCircleSharp,
  NotificationsOffOutline,
  NotificationsOffSharp,
  NotificationsOutline,
  NotificationsSharp,
  Nuclear,
  NuclearOutline,
  NuclearSharp,
  Nutrition,
  NutritionOutline,
  NutritionSharp,
  Open,
  OpenOutline,
  OpenSharp,
  Options,
  OptionsOutline,
  OptionsSharp,
  PaperPlane,
  PaperPlaneOutline,
  PaperPlaneSharp,
  PartlySunny,
  PartlySunnyOutline,
  PartlySunnySharp,
  Pause,
  PauseCircle,
  PauseCircleOutline,
  PauseCircleSharp,
  PauseOutline,
  PauseSharp,
  Paw,
  PawOutline,
  PawSharp,
  Pencil,
  PencilOutline,
  PencilSharp,
  People,
  PeopleCircle,
  PeopleCircleOutline,
  PeopleCircleSharp,
  PeopleOutline,
  PeopleSharp,
  Person,
  PersonAdd,
  PersonAddOutline,
  PersonAddSharp,
  PersonCircle,
  PersonCircleOutline,
  PersonCircleSharp,
  PersonOutline,
  PersonRemove,
  PersonRemoveOutline,
  PersonRemoveSharp,
  PersonSharp,
  PhoneLandscape,
  PhoneLandscapeOutline,
  PhoneLandscapeSharp,
  PhonePortrait,
  PhonePortraitOutline,
  PhonePortraitSharp,
  PieChart,
  PieChartOutline,
  PieChartSharp,
  Pin,
  PinOutline,
  PinSharp,
  Pint,
  PintOutline,
  PintSharp,
  Pizza,
  PizzaOutline,
  PizzaSharp,
  Planet,
  PlanetOutline,
  PlanetSharp,
  Play,
  PlayBack,
  PlayBackCircle,
  PlayBackCircleOutline,
  PlayBackCircleSharp,
  PlayBackOutline,
  PlayBackSharp,
  PlayCircle,
  PlayCircleOutline,
  PlayCircleSharp,
  PlayForward,
  PlayForwardCircle,
  PlayForwardCircleOutline,
  PlayForwardCircleSharp,
  PlayForwardOutline,
  PlayForwardSharp,
  PlayOutline,
  PlaySharp,
  PlaySkipBack,
  PlaySkipBackCircle,
  PlaySkipBackCircleOutline,
  PlaySkipBackCircleSharp,
  PlaySkipBackOutline,
  PlaySkipBackSharp,
  PlaySkipForward,
  PlaySkipForwardCircle,
  PlaySkipForwardCircleOutline,
  PlaySkipForwardCircleSharp,
  PlaySkipForwardOutline,
  PlaySkipForwardSharp,
  Podium,
  PodiumOutline,
  PodiumSharp,
  Power,
  PowerOutline,
  PowerSharp,
  Pricetag,
  PricetagOutline,
  PricetagSharp,
  Pricetags,
  PricetagsOutline,
  PricetagsSharp,
  Print,
  PrintOutline,
  PrintSharp,
  Prism,
  PrismOutline,
  PrismSharp,
  Pulse,
  PulseOutline,
  PulseSharp,
  Push,
  PushOutline,
  PushSharp,
  QrCode,
  QrCodeOutline,
  QrCodeSharp,
  Radio,
  RadioButtonOff,
  RadioButtonOffOutline,
  RadioButtonOffSharp,
  RadioButtonOn,
  RadioButtonOnOutline,
  RadioButtonOnSharp,
  RadioOutline,
  RadioSharp,
  Rainy,
  RainyOutline,
  RainySharp,
  Reader,
  ReaderOutline,
  ReaderSharp,
  Receipt,
  ReceiptOutline,
  ReceiptSharp,
  Recording,
  RecordingOutline,
  RecordingSharp,
  Refresh,
  RefreshCircle,
  RefreshCircleOutline,
  RefreshCircleSharp,
  RefreshOutline,
  RefreshSharp,
  Reload,
  ReloadCircle,
  ReloadCircleOutline,
  ReloadCircleSharp,
  ReloadOutline,
  ReloadSharp,
  Remove,
  RemoveCircle,
  RemoveCircleOutline,
  RemoveCircleSharp,
  RemoveOutline,
  RemoveSharp,
  ReorderFour,
  ReorderFourOutline,
  ReorderFourSharp,
  ReorderThree,
  ReorderThreeOutline,
  ReorderThreeSharp,
  ReorderTwo,
  ReorderTwoOutline,
  ReorderTwoSharp,
  Repeat,
  RepeatOutline,
  RepeatSharp,
  Resize,
  ResizeOutline,
  ResizeSharp,
  Restaurant,
  RestaurantOutline,
  RestaurantSharp,
  ReturnDownBack,
  ReturnDownBackOutline,
  ReturnDownBackSharp,
  ReturnDownForward,
  ReturnDownForwardOutline,
  ReturnDownForwardSharp,
  ReturnUpBack,
  ReturnUpBackOutline,
  ReturnUpBackSharp,
  ReturnUpForward,
  ReturnUpForwardOutline,
  ReturnUpForwardSharp,
  Ribbon,
  RibbonOutline,
  RibbonSharp,
  Rocket,
  RocketOutline,
  RocketSharp,
  Rose,
  RoseOutline,
  RoseSharp,
  Sad,
  SadOutline,
  SadSharp,
  Save,
  SaveOutline,
  SaveSharp,
  Scale,
  ScaleOutline,
  ScaleSharp,
  Scan,
  ScanCircle,
  ScanCircleOutline,
  ScanCircleSharp,
  ScanOutline,
  ScanSharp,
  School,
  SchoolOutline,
  SchoolSharp,
  Search,
  SearchCircle,
  SearchCircleOutline,
  SearchCircleSharp,
  SearchOutline,
  SearchSharp,
  Send,
  SendOutline,
  SendSharp,
  Server,
  ServerOutline,
  ServerSharp,
  Settings,
  SettingsOutline,
  SettingsSharp,
  Shapes,
  ShapesOutline,
  ShapesSharp,
  Share,
  ShareOutline,
  ShareSharp,
  ShareSocial,
  ShareSocialOutline,
  ShareSocialSharp,
  Shield,
  ShieldCheckmark,
  ShieldCheckmarkOutline,
  ShieldCheckmarkSharp,
  ShieldHalf,
  ShieldHalfOutline,
  ShieldHalfSharp,
  ShieldOutline,
  ShieldSharp,
  Shirt,
  ShirtOutline,
  ShirtSharp,
  Shuffle,
  ShuffleOutline,
  ShuffleSharp,
  Skull,
  SkullOutline,
  SkullSharp,
  Snow,
  SnowOutline,
  SnowSharp,
  Sparkles,
  SparklesOutline,
  SparklesSharp,
  Speedometer,
  SpeedometerOutline,
  SpeedometerSharp,
  Square,
  SquareOutline,
  SquareSharp,
  Star,
  StarHalf,
  StarHalfOutline,
  StarHalfSharp,
  StarOutline,
  StarSharp,
  StatsChart,
  StatsChartOutline,
  StatsChartSharp,
  Stop,
  StopCircle,
  StopCircleOutline,
  StopCircleSharp,
  StopOutline,
  StopSharp,
  Stopwatch,
  StopwatchOutline,
  StopwatchSharp,
  Storefront,
  StorefrontOutline,
  StorefrontSharp,
  Subway,
  SubwayOutline,
  SubwaySharp,
  Sunny,
  SunnyOutline,
  SunnySharp,
  SwapHorizontal,
  SwapHorizontalOutline,
  SwapHorizontalSharp,
  SwapVertical,
  SwapVerticalOutline,
  SwapVerticalSharp,
  Sync,
  SyncCircle,
  SyncCircleOutline,
  SyncCircleSharp,
  SyncOutline,
  SyncSharp,
  TabletLandscape,
  TabletLandscapeOutline,
  TabletLandscapeSharp,
  TabletPortrait,
  TabletPortraitOutline,
  TabletPortraitSharp,
  Telescope,
  TelescopeOutline,
  TelescopeSharp,
  Tennisball,
  TennisballOutline,
  TennisballSharp,
  Terminal,
  TerminalOutline,
  TerminalSharp,
  Text,
  TextOutline,
  TextSharp,
  Thermometer,
  ThermometerOutline,
  ThermometerSharp,
  ThumbsDown,
  ThumbsDownOutline,
  ThumbsDownSharp,
  ThumbsUp,
  ThumbsUpOutline,
  ThumbsUpSharp,
  Thunderstorm,
  ThunderstormOutline,
  ThunderstormSharp,
  Ticket,
  TicketOutline,
  TicketSharp,
  Time,
  TimeOutline,
  TimeSharp,
  Timer,
  TimerOutline,
  TimerSharp,
  Today,
  TodayOutline,
  TodaySharp,
  Toggle,
  ToggleOutline,
  ToggleSharp,
  TrailSign,
  TrailSignOutline,
  TrailSignSharp,
  Train,
  TrainOutline,
  TrainSharp,
  Transgender,
  TransgenderOutline,
  TransgenderSharp,
  Trash,
  TrashBin,
  TrashBinOutline,
  TrashBinSharp,
  TrashOutline,
  TrashSharp,
  TrendingDown,
  TrendingDownOutline,
  TrendingDownSharp,
  TrendingUp,
  TrendingUpOutline,
  TrendingUpSharp,
  Triangle,
  TriangleOutline,
  TriangleSharp,
  Trophy,
  TrophyOutline,
  TrophySharp,
  Tv,
  TvOutline,
  TvSharp,
  Umbrella,
  UmbrellaOutline,
  UmbrellaSharp,
  Unlink,
  UnlinkOutline,
  UnlinkSharp,
  Videocam,
  VideocamOff,
  VideocamOffOutline,
  VideocamOffSharp,
  VideocamOutline,
  VideocamSharp,
  VolumeHigh,
  VolumeHighOutline,
  VolumeHighSharp,
  VolumeLow,
  VolumeLowOutline,
  VolumeLowSharp,
  VolumeMedium,
  VolumeMediumOutline,
  VolumeMediumSharp,
  VolumeMute,
  VolumeMuteOutline,
  VolumeMuteSharp,
  VolumeOff,
  VolumeOffOutline,
  VolumeOffSharp,
  Walk,
  WalkOutline,
  WalkSharp,
  Wallet,
  WalletOutline,
  WalletSharp,
  Warning,
  WarningOutline,
  WarningSharp,
  Watch,
  WatchOutline,
  WatchSharp,
  Water,
  WaterOutline,
  WaterSharp,
  Wifi,
  WifiOutline,
  WifiSharp,
  Wine,
  WineOutline,
  WineSharp,
  Woman,
  WomanOutline,
  WomanSharp,
} from '@vicons/ionicons5';

export const IconAccessibility = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAccessibility',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Accessibility />
      </Icon>
    );
  },
});

export const IconAccessibilityOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAccessibilityOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AccessibilityOutline />
      </Icon>
    );
  },
});

export const IconAccessibilitySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAccessibilitySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AccessibilitySharp />
      </Icon>
    );
  },
});

export const IconAdd = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAdd',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Add />
      </Icon>
    );
  },
});

export const IconAddCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAddCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AddCircle />
      </Icon>
    );
  },
});

export const IconAddCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAddCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AddCircleOutline />
      </Icon>
    );
  },
});

export const IconAddCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAddCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AddCircleSharp />
      </Icon>
    );
  },
});

export const IconAddOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAddOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AddOutline />
      </Icon>
    );
  },
});

export const IconAddSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAddSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AddSharp />
      </Icon>
    );
  },
});

export const IconAirplane = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAirplane',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Airplane />
      </Icon>
    );
  },
});

export const IconAirplaneOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAirplaneOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AirplaneOutline />
      </Icon>
    );
  },
});

export const IconAirplaneSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAirplaneSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AirplaneSharp />
      </Icon>
    );
  },
});

export const IconAlarm = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlarm',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Alarm />
      </Icon>
    );
  },
});

export const IconAlarmOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlarmOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AlarmOutline />
      </Icon>
    );
  },
});

export const IconAlarmSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlarmSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AlarmSharp />
      </Icon>
    );
  },
});

export const IconAlbums = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlbums',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Albums />
      </Icon>
    );
  },
});

export const IconAlbumsOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlbumsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AlbumsOutline />
      </Icon>
    );
  },
});

export const IconAlbumsSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlbumsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AlbumsSharp />
      </Icon>
    );
  },
});

export const IconAlert = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlert',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Alert />
      </Icon>
    );
  },
});

export const IconAlertCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlertCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AlertCircle />
      </Icon>
    );
  },
});

export const IconAlertCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlertCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AlertCircleOutline />
      </Icon>
    );
  },
});

export const IconAlertCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlertCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AlertCircleSharp />
      </Icon>
    );
  },
});

export const IconAlertOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlertOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AlertOutline />
      </Icon>
    );
  },
});

export const IconAlertSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAlertSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AlertSharp />
      </Icon>
    );
  },
});

export const IconAmericanFootball = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAmericanFootball',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AmericanFootball />
      </Icon>
    );
  },
});

export const IconAmericanFootballOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAmericanFootballOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AmericanFootballOutline />
      </Icon>
    );
  },
});

export const IconAmericanFootballSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAmericanFootballSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AmericanFootballSharp />
      </Icon>
    );
  },
});

export const IconAnalytics = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAnalytics',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Analytics />
      </Icon>
    );
  },
});

export const IconAnalyticsOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAnalyticsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AnalyticsOutline />
      </Icon>
    );
  },
});

export const IconAnalyticsSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAnalyticsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AnalyticsSharp />
      </Icon>
    );
  },
});

export const IconAperture = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAperture',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Aperture />
      </Icon>
    );
  },
});

export const IconApertureOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconApertureOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ApertureOutline />
      </Icon>
    );
  },
});

export const IconApertureSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconApertureSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ApertureSharp />
      </Icon>
    );
  },
});

export const IconApps = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconApps',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Apps />
      </Icon>
    );
  },
});

export const IconAppsOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAppsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AppsOutline />
      </Icon>
    );
  },
});

export const IconAppsSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAppsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AppsSharp />
      </Icon>
    );
  },
});

export const IconArchive = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArchive',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Archive />
      </Icon>
    );
  },
});

export const IconArchiveOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArchiveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArchiveOutline />
      </Icon>
    );
  },
});

export const IconArchiveSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArchiveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArchiveSharp />
      </Icon>
    );
  },
});

export const IconArrowBack = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowBack />
      </Icon>
    );
  },
});

export const IconArrowBackCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowBackCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowBackCircle />
      </Icon>
    );
  },
});

export const IconArrowBackCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowBackCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowBackCircleOutline />
      </Icon>
    );
  },
});

export const IconArrowBackCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowBackCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowBackCircleSharp />
      </Icon>
    );
  },
});

export const IconArrowBackOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowBackOutline />
      </Icon>
    );
  },
});

export const IconArrowBackSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowBackSharp />
      </Icon>
    );
  },
});

export const IconArrowDown = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowDown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowDown />
      </Icon>
    );
  },
});

export const IconArrowDownCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowDownCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowDownCircle />
      </Icon>
    );
  },
});

export const IconArrowDownCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowDownCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowDownCircleOutline />
      </Icon>
    );
  },
});

export const IconArrowDownCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowDownCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowDownCircleSharp />
      </Icon>
    );
  },
});

export const IconArrowDownOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowDownOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowDownOutline />
      </Icon>
    );
  },
});

export const IconArrowDownSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowDownSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowDownSharp />
      </Icon>
    );
  },
});

export const IconArrowForward = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowForward />
      </Icon>
    );
  },
});

export const IconArrowForwardCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowForwardCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowForwardCircle />
      </Icon>
    );
  },
});

export const IconArrowForwardCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowForwardCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowForwardCircleOutline />
      </Icon>
    );
  },
});

export const IconArrowForwardCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowForwardCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowForwardCircleSharp />
      </Icon>
    );
  },
});

export const IconArrowForwardOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowForwardOutline />
      </Icon>
    );
  },
});

export const IconArrowForwardSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowForwardSharp />
      </Icon>
    );
  },
});

export const IconArrowRedo = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowRedo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowRedo />
      </Icon>
    );
  },
});

export const IconArrowRedoCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowRedoCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowRedoCircle />
      </Icon>
    );
  },
});

export const IconArrowRedoCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowRedoCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowRedoCircleOutline />
      </Icon>
    );
  },
});

export const IconArrowRedoCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowRedoCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowRedoCircleSharp />
      </Icon>
    );
  },
});

export const IconArrowRedoOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowRedoOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowRedoOutline />
      </Icon>
    );
  },
});

export const IconArrowRedoSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowRedoSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowRedoSharp />
      </Icon>
    );
  },
});

export const IconArrowUndo = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUndo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUndo />
      </Icon>
    );
  },
});

export const IconArrowUndoCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUndoCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUndoCircle />
      </Icon>
    );
  },
});

export const IconArrowUndoCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUndoCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUndoCircleOutline />
      </Icon>
    );
  },
});

export const IconArrowUndoCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUndoCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUndoCircleSharp />
      </Icon>
    );
  },
});

export const IconArrowUndoOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUndoOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUndoOutline />
      </Icon>
    );
  },
});

export const IconArrowUndoSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUndoSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUndoSharp />
      </Icon>
    );
  },
});

export const IconArrowUp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUp />
      </Icon>
    );
  },
});

export const IconArrowUpCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUpCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUpCircle />
      </Icon>
    );
  },
});

export const IconArrowUpCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUpCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUpCircleOutline />
      </Icon>
    );
  },
});

export const IconArrowUpCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUpCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUpCircleSharp />
      </Icon>
    );
  },
});

export const IconArrowUpOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUpOutline />
      </Icon>
    );
  },
});

export const IconArrowUpSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconArrowUpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ArrowUpSharp />
      </Icon>
    );
  },
});

export const IconAt = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAt',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <At />
      </Icon>
    );
  },
});

export const IconAtCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAtCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AtCircle />
      </Icon>
    );
  },
});

export const IconAtCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAtCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AtCircleOutline />
      </Icon>
    );
  },
});

export const IconAtCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAtCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AtCircleSharp />
      </Icon>
    );
  },
});

export const IconAtOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAtOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AtOutline />
      </Icon>
    );
  },
});

export const IconAtSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAtSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AtSharp />
      </Icon>
    );
  },
});

export const IconAttach = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAttach',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Attach />
      </Icon>
    );
  },
});

export const IconAttachOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAttachOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AttachOutline />
      </Icon>
    );
  },
});

export const IconAttachSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconAttachSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <AttachSharp />
      </Icon>
    );
  },
});

export const IconBackspace = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBackspace',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Backspace />
      </Icon>
    );
  },
});

export const IconBackspaceOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBackspaceOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BackspaceOutline />
      </Icon>
    );
  },
});

export const IconBackspaceSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBackspaceSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BackspaceSharp />
      </Icon>
    );
  },
});

export const IconBag = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBag',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bag />
      </Icon>
    );
  },
});

export const IconBagAdd = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagAdd',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagAdd />
      </Icon>
    );
  },
});

export const IconBagAddOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagAddOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagAddOutline />
      </Icon>
    );
  },
});

export const IconBagAddSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagAddSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagAddSharp />
      </Icon>
    );
  },
});

export const IconBagCheck = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagCheck',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagCheck />
      </Icon>
    );
  },
});

export const IconBagCheckOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagCheckOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagCheckOutline />
      </Icon>
    );
  },
});

export const IconBagCheckSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagCheckSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagCheckSharp />
      </Icon>
    );
  },
});

export const IconBagHandle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagHandle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagHandle />
      </Icon>
    );
  },
});

export const IconBagHandleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagHandleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagHandleOutline />
      </Icon>
    );
  },
});

export const IconBagHandleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagHandleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagHandleSharp />
      </Icon>
    );
  },
});

export const IconBagOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagOutline />
      </Icon>
    );
  },
});

export const IconBagRemove = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagRemove',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagRemove />
      </Icon>
    );
  },
});

export const IconBagRemoveOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagRemoveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagRemoveOutline />
      </Icon>
    );
  },
});

export const IconBagRemoveSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagRemoveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagRemoveSharp />
      </Icon>
    );
  },
});

export const IconBagSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBagSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BagSharp />
      </Icon>
    );
  },
});

export const IconBalloon = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBalloon',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Balloon />
      </Icon>
    );
  },
});

export const IconBalloonOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBalloonOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BalloonOutline />
      </Icon>
    );
  },
});

export const IconBalloonSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBalloonSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BalloonSharp />
      </Icon>
    );
  },
});

export const IconBan = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBan',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Ban />
      </Icon>
    );
  },
});

export const IconBanOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBanOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BanOutline />
      </Icon>
    );
  },
});

export const IconBanSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBanSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BanSharp />
      </Icon>
    );
  },
});

export const IconBandage = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBandage',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bandage />
      </Icon>
    );
  },
});

export const IconBandageOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBandageOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BandageOutline />
      </Icon>
    );
  },
});

export const IconBandageSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBandageSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BandageSharp />
      </Icon>
    );
  },
});

export const IconBarChart = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBarChart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BarChart />
      </Icon>
    );
  },
});

export const IconBarChartOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBarChartOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BarChartOutline />
      </Icon>
    );
  },
});

export const IconBarChartSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBarChartSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BarChartSharp />
      </Icon>
    );
  },
});

export const IconBarbell = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBarbell',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Barbell />
      </Icon>
    );
  },
});

export const IconBarbellOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBarbellOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BarbellOutline />
      </Icon>
    );
  },
});

export const IconBarbellSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBarbellSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BarbellSharp />
      </Icon>
    );
  },
});

export const IconBarcode = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBarcode',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Barcode />
      </Icon>
    );
  },
});

export const IconBarcodeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBarcodeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BarcodeOutline />
      </Icon>
    );
  },
});

export const IconBarcodeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBarcodeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BarcodeSharp />
      </Icon>
    );
  },
});

export const IconBaseball = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBaseball',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Baseball />
      </Icon>
    );
  },
});

export const IconBaseballOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBaseballOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BaseballOutline />
      </Icon>
    );
  },
});

export const IconBaseballSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBaseballSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BaseballSharp />
      </Icon>
    );
  },
});

export const IconBasket = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBasket',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Basket />
      </Icon>
    );
  },
});

export const IconBasketOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBasketOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BasketOutline />
      </Icon>
    );
  },
});

export const IconBasketSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBasketSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BasketSharp />
      </Icon>
    );
  },
});

export const IconBasketball = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBasketball',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Basketball />
      </Icon>
    );
  },
});

export const IconBasketballOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBasketballOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BasketballOutline />
      </Icon>
    );
  },
});

export const IconBasketballSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBasketballSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BasketballSharp />
      </Icon>
    );
  },
});

export const IconBatteryCharging = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryCharging',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryCharging />
      </Icon>
    );
  },
});

export const IconBatteryChargingOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryChargingOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryChargingOutline />
      </Icon>
    );
  },
});

export const IconBatteryChargingSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryChargingSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryChargingSharp />
      </Icon>
    );
  },
});

export const IconBatteryDead = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryDead',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryDead />
      </Icon>
    );
  },
});

export const IconBatteryDeadOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryDeadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryDeadOutline />
      </Icon>
    );
  },
});

export const IconBatteryDeadSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryDeadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryDeadSharp />
      </Icon>
    );
  },
});

export const IconBatteryFull = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryFull',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryFull />
      </Icon>
    );
  },
});

export const IconBatteryFullOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryFullOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryFullOutline />
      </Icon>
    );
  },
});

export const IconBatteryFullSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryFullSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryFullSharp />
      </Icon>
    );
  },
});

export const IconBatteryHalf = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryHalf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryHalf />
      </Icon>
    );
  },
});

export const IconBatteryHalfOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryHalfOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryHalfOutline />
      </Icon>
    );
  },
});

export const IconBatteryHalfSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBatteryHalfSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BatteryHalfSharp />
      </Icon>
    );
  },
});

export const IconBeaker = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBeaker',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Beaker />
      </Icon>
    );
  },
});

export const IconBeakerOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBeakerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BeakerOutline />
      </Icon>
    );
  },
});

export const IconBeakerSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBeakerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BeakerSharp />
      </Icon>
    );
  },
});

export const IconBed = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBed',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bed />
      </Icon>
    );
  },
});

export const IconBedOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBedOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BedOutline />
      </Icon>
    );
  },
});

export const IconBedSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBedSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BedSharp />
      </Icon>
    );
  },
});

export const IconBeer = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBeer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Beer />
      </Icon>
    );
  },
});

export const IconBeerOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBeerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BeerOutline />
      </Icon>
    );
  },
});

export const IconBeerSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBeerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BeerSharp />
      </Icon>
    );
  },
});

export const IconBicycle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBicycle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bicycle />
      </Icon>
    );
  },
});

export const IconBicycleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBicycleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BicycleOutline />
      </Icon>
    );
  },
});

export const IconBicycleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBicycleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BicycleSharp />
      </Icon>
    );
  },
});

export const IconBluetooth = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBluetooth',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bluetooth />
      </Icon>
    );
  },
});

export const IconBluetoothOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBluetoothOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BluetoothOutline />
      </Icon>
    );
  },
});

export const IconBluetoothSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBluetoothSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BluetoothSharp />
      </Icon>
    );
  },
});

export const IconBoat = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBoat',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Boat />
      </Icon>
    );
  },
});

export const IconBoatOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBoatOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BoatOutline />
      </Icon>
    );
  },
});

export const IconBoatSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBoatSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BoatSharp />
      </Icon>
    );
  },
});

export const IconBody = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBody',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Body />
      </Icon>
    );
  },
});

export const IconBodyOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBodyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BodyOutline />
      </Icon>
    );
  },
});

export const IconBodySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBodySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BodySharp />
      </Icon>
    );
  },
});

export const IconBonfire = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBonfire',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bonfire />
      </Icon>
    );
  },
});

export const IconBonfireOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBonfireOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BonfireOutline />
      </Icon>
    );
  },
});

export const IconBonfireSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBonfireSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BonfireSharp />
      </Icon>
    );
  },
});

export const IconBook = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBook',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Book />
      </Icon>
    );
  },
});

export const IconBookOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBookOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BookOutline />
      </Icon>
    );
  },
});

export const IconBookSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBookSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BookSharp />
      </Icon>
    );
  },
});

export const IconBookmark = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBookmark',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bookmark />
      </Icon>
    );
  },
});

export const IconBookmarkOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBookmarkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BookmarkOutline />
      </Icon>
    );
  },
});

export const IconBookmarkSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBookmarkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BookmarkSharp />
      </Icon>
    );
  },
});

export const IconBookmarks = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBookmarks',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bookmarks />
      </Icon>
    );
  },
});

export const IconBookmarksOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBookmarksOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BookmarksOutline />
      </Icon>
    );
  },
});

export const IconBookmarksSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBookmarksSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BookmarksSharp />
      </Icon>
    );
  },
});

export const IconBowlingBall = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBowlingBall',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BowlingBall />
      </Icon>
    );
  },
});

export const IconBowlingBallOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBowlingBallOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BowlingBallOutline />
      </Icon>
    );
  },
});

export const IconBowlingBallSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBowlingBallSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BowlingBallSharp />
      </Icon>
    );
  },
});

export const IconBriefcase = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBriefcase',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Briefcase />
      </Icon>
    );
  },
});

export const IconBriefcaseOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBriefcaseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BriefcaseOutline />
      </Icon>
    );
  },
});

export const IconBriefcaseSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBriefcaseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BriefcaseSharp />
      </Icon>
    );
  },
});

export const IconBrowsers = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBrowsers',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Browsers />
      </Icon>
    );
  },
});

export const IconBrowsersOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBrowsersOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BrowsersOutline />
      </Icon>
    );
  },
});

export const IconBrowsersSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBrowsersSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BrowsersSharp />
      </Icon>
    );
  },
});

export const IconBrush = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBrush',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Brush />
      </Icon>
    );
  },
});

export const IconBrushOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBrushOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BrushOutline />
      </Icon>
    );
  },
});

export const IconBrushSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBrushSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BrushSharp />
      </Icon>
    );
  },
});

export const IconBug = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBug',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bug />
      </Icon>
    );
  },
});

export const IconBugOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBugOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BugOutline />
      </Icon>
    );
  },
});

export const IconBugSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBugSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BugSharp />
      </Icon>
    );
  },
});

export const IconBuild = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBuild',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Build />
      </Icon>
    );
  },
});

export const IconBuildOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBuildOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BuildOutline />
      </Icon>
    );
  },
});

export const IconBuildSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBuildSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BuildSharp />
      </Icon>
    );
  },
});

export const IconBulb = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBulb',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bulb />
      </Icon>
    );
  },
});

export const IconBulbOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBulbOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BulbOutline />
      </Icon>
    );
  },
});

export const IconBulbSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBulbSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BulbSharp />
      </Icon>
    );
  },
});

export const IconBus = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBus',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Bus />
      </Icon>
    );
  },
});

export const IconBusOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBusOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BusOutline />
      </Icon>
    );
  },
});

export const IconBusSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBusSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BusSharp />
      </Icon>
    );
  },
});

export const IconBusiness = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBusiness',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Business />
      </Icon>
    );
  },
});

export const IconBusinessOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBusinessOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BusinessOutline />
      </Icon>
    );
  },
});

export const IconBusinessSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconBusinessSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <BusinessSharp />
      </Icon>
    );
  },
});

export const IconCafe = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCafe',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Cafe />
      </Icon>
    );
  },
});

export const IconCafeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCafeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CafeOutline />
      </Icon>
    );
  },
});

export const IconCafeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCafeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CafeSharp />
      </Icon>
    );
  },
});

export const IconCalculator = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalculator',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Calculator />
      </Icon>
    );
  },
});

export const IconCalculatorOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalculatorOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CalculatorOutline />
      </Icon>
    );
  },
});

export const IconCalculatorSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalculatorSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CalculatorSharp />
      </Icon>
    );
  },
});

export const IconCalendar = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalendar',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Calendar />
      </Icon>
    );
  },
});

export const IconCalendarClear = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalendarClear',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CalendarClear />
      </Icon>
    );
  },
});

export const IconCalendarClearOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalendarClearOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CalendarClearOutline />
      </Icon>
    );
  },
});

export const IconCalendarClearSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalendarClearSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CalendarClearSharp />
      </Icon>
    );
  },
});

export const IconCalendarNumber = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalendarNumber',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CalendarNumber />
      </Icon>
    );
  },
});

export const IconCalendarNumberOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalendarNumberOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CalendarNumberOutline />
      </Icon>
    );
  },
});

export const IconCalendarNumberSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalendarNumberSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CalendarNumberSharp />
      </Icon>
    );
  },
});

export const IconCalendarOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalendarOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CalendarOutline />
      </Icon>
    );
  },
});

export const IconCalendarSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCalendarSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CalendarSharp />
      </Icon>
    );
  },
});

export const IconCall = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCall',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Call />
      </Icon>
    );
  },
});

export const IconCallOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCallOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CallOutline />
      </Icon>
    );
  },
});

export const IconCallSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCallSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CallSharp />
      </Icon>
    );
  },
});

export const IconCamera = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCamera',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Camera />
      </Icon>
    );
  },
});

export const IconCameraOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCameraOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CameraOutline />
      </Icon>
    );
  },
});

export const IconCameraReverse = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCameraReverse',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CameraReverse />
      </Icon>
    );
  },
});

export const IconCameraReverseOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCameraReverseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CameraReverseOutline />
      </Icon>
    );
  },
});

export const IconCameraReverseSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCameraReverseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CameraReverseSharp />
      </Icon>
    );
  },
});

export const IconCameraSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCameraSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CameraSharp />
      </Icon>
    );
  },
});

export const IconCar = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCar',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Car />
      </Icon>
    );
  },
});

export const IconCarOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCarOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CarOutline />
      </Icon>
    );
  },
});

export const IconCarSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCarSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CarSharp />
      </Icon>
    );
  },
});

export const IconCarSport = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCarSport',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CarSport />
      </Icon>
    );
  },
});

export const IconCarSportOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCarSportOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CarSportOutline />
      </Icon>
    );
  },
});

export const IconCarSportSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCarSportSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CarSportSharp />
      </Icon>
    );
  },
});

export const IconCard = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCard',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Card />
      </Icon>
    );
  },
});

export const IconCardOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CardOutline />
      </Icon>
    );
  },
});

export const IconCardSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CardSharp />
      </Icon>
    );
  },
});

export const IconCaretBack = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretBack />
      </Icon>
    );
  },
});

export const IconCaretBackCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretBackCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretBackCircle />
      </Icon>
    );
  },
});

export const IconCaretBackCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretBackCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretBackCircleOutline />
      </Icon>
    );
  },
});

export const IconCaretBackCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretBackCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretBackCircleSharp />
      </Icon>
    );
  },
});

export const IconCaretBackOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretBackOutline />
      </Icon>
    );
  },
});

export const IconCaretBackSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretBackSharp />
      </Icon>
    );
  },
});

export const IconCaretDown = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretDown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretDown />
      </Icon>
    );
  },
});

export const IconCaretDownCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretDownCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretDownCircle />
      </Icon>
    );
  },
});

export const IconCaretDownCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretDownCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretDownCircleOutline />
      </Icon>
    );
  },
});

export const IconCaretDownCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretDownCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretDownCircleSharp />
      </Icon>
    );
  },
});

export const IconCaretDownOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretDownOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretDownOutline />
      </Icon>
    );
  },
});

export const IconCaretDownSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretDownSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretDownSharp />
      </Icon>
    );
  },
});

export const IconCaretForward = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretForward />
      </Icon>
    );
  },
});

export const IconCaretForwardCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretForwardCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretForwardCircle />
      </Icon>
    );
  },
});

export const IconCaretForwardCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretForwardCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretForwardCircleOutline />
      </Icon>
    );
  },
});

export const IconCaretForwardCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretForwardCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretForwardCircleSharp />
      </Icon>
    );
  },
});

export const IconCaretForwardOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretForwardOutline />
      </Icon>
    );
  },
});

export const IconCaretForwardSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretForwardSharp />
      </Icon>
    );
  },
});

export const IconCaretUp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretUp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretUp />
      </Icon>
    );
  },
});

export const IconCaretUpCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretUpCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretUpCircle />
      </Icon>
    );
  },
});

export const IconCaretUpCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretUpCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretUpCircleOutline />
      </Icon>
    );
  },
});

export const IconCaretUpCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretUpCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretUpCircleSharp />
      </Icon>
    );
  },
});

export const IconCaretUpOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretUpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretUpOutline />
      </Icon>
    );
  },
});

export const IconCaretUpSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCaretUpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CaretUpSharp />
      </Icon>
    );
  },
});

export const IconCart = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Cart />
      </Icon>
    );
  },
});

export const IconCartOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCartOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CartOutline />
      </Icon>
    );
  },
});

export const IconCartSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCartSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CartSharp />
      </Icon>
    );
  },
});

export const IconCash = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCash',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Cash />
      </Icon>
    );
  },
});

export const IconCashOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCashOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CashOutline />
      </Icon>
    );
  },
});

export const IconCashSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCashSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CashSharp />
      </Icon>
    );
  },
});

export const IconCellular = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCellular',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Cellular />
      </Icon>
    );
  },
});

export const IconCellularOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCellularOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CellularOutline />
      </Icon>
    );
  },
});

export const IconCellularSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCellularSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CellularSharp />
      </Icon>
    );
  },
});

export const IconChatbox = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatbox',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Chatbox />
      </Icon>
    );
  },
});

export const IconChatboxEllipses = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatboxEllipses',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatboxEllipses />
      </Icon>
    );
  },
});

export const IconChatboxEllipsesOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatboxEllipsesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatboxEllipsesOutline />
      </Icon>
    );
  },
});

export const IconChatboxEllipsesSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatboxEllipsesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatboxEllipsesSharp />
      </Icon>
    );
  },
});

export const IconChatboxOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatboxOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatboxOutline />
      </Icon>
    );
  },
});

export const IconChatboxSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatboxSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatboxSharp />
      </Icon>
    );
  },
});

export const IconChatbubble = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatbubble',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Chatbubble />
      </Icon>
    );
  },
});

export const IconChatbubbleEllipses = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatbubbleEllipses',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatbubbleEllipses />
      </Icon>
    );
  },
});

export const IconChatbubbleEllipsesOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatbubbleEllipsesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatbubbleEllipsesOutline />
      </Icon>
    );
  },
});

export const IconChatbubbleEllipsesSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatbubbleEllipsesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatbubbleEllipsesSharp />
      </Icon>
    );
  },
});

export const IconChatbubbleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatbubbleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatbubbleOutline />
      </Icon>
    );
  },
});

export const IconChatbubbleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatbubbleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatbubbleSharp />
      </Icon>
    );
  },
});

export const IconChatbubbles = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatbubbles',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Chatbubbles />
      </Icon>
    );
  },
});

export const IconChatbubblesOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatbubblesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatbubblesOutline />
      </Icon>
    );
  },
});

export const IconChatbubblesSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChatbubblesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChatbubblesSharp />
      </Icon>
    );
  },
});

export const IconCheckbox = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckbox',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Checkbox />
      </Icon>
    );
  },
});

export const IconCheckboxOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckboxOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckboxOutline />
      </Icon>
    );
  },
});

export const IconCheckboxSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckboxSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckboxSharp />
      </Icon>
    );
  },
});

export const IconCheckmark = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmark',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Checkmark />
      </Icon>
    );
  },
});

export const IconCheckmarkCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkCircle />
      </Icon>
    );
  },
});

export const IconCheckmarkCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkCircleOutline />
      </Icon>
    );
  },
});

export const IconCheckmarkCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkCircleSharp />
      </Icon>
    );
  },
});

export const IconCheckmarkDone = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkDone',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkDone />
      </Icon>
    );
  },
});

export const IconCheckmarkDoneCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkDoneCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkDoneCircle />
      </Icon>
    );
  },
});

export const IconCheckmarkDoneCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkDoneCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkDoneCircleOutline />
      </Icon>
    );
  },
});

export const IconCheckmarkDoneCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkDoneCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkDoneCircleSharp />
      </Icon>
    );
  },
});

export const IconCheckmarkDoneOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkDoneOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkDoneOutline />
      </Icon>
    );
  },
});

export const IconCheckmarkDoneSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkDoneSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkDoneSharp />
      </Icon>
    );
  },
});

export const IconCheckmarkOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkOutline />
      </Icon>
    );
  },
});

export const IconCheckmarkSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCheckmarkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CheckmarkSharp />
      </Icon>
    );
  },
});

export const IconChevronBack = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronBack />
      </Icon>
    );
  },
});

export const IconChevronBackCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronBackCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronBackCircle />
      </Icon>
    );
  },
});

export const IconChevronBackCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronBackCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronBackCircleOutline />
      </Icon>
    );
  },
});

export const IconChevronBackCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronBackCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronBackCircleSharp />
      </Icon>
    );
  },
});

export const IconChevronBackOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronBackOutline />
      </Icon>
    );
  },
});

export const IconChevronBackSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronBackSharp />
      </Icon>
    );
  },
});

export const IconChevronDown = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronDown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronDown />
      </Icon>
    );
  },
});

export const IconChevronDownCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronDownCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronDownCircle />
      </Icon>
    );
  },
});

export const IconChevronDownCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronDownCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronDownCircleOutline />
      </Icon>
    );
  },
});

export const IconChevronDownCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronDownCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronDownCircleSharp />
      </Icon>
    );
  },
});

export const IconChevronDownOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronDownOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronDownOutline />
      </Icon>
    );
  },
});

export const IconChevronDownSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronDownSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronDownSharp />
      </Icon>
    );
  },
});

export const IconChevronForward = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronForward />
      </Icon>
    );
  },
});

export const IconChevronForwardCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronForwardCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronForwardCircle />
      </Icon>
    );
  },
});

export const IconChevronForwardCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronForwardCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronForwardCircleOutline />
      </Icon>
    );
  },
});

export const IconChevronForwardCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronForwardCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronForwardCircleSharp />
      </Icon>
    );
  },
});

export const IconChevronForwardOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronForwardOutline />
      </Icon>
    );
  },
});

export const IconChevronForwardSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronForwardSharp />
      </Icon>
    );
  },
});

export const IconChevronUp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronUp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronUp />
      </Icon>
    );
  },
});

export const IconChevronUpCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronUpCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronUpCircle />
      </Icon>
    );
  },
});

export const IconChevronUpCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronUpCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronUpCircleOutline />
      </Icon>
    );
  },
});

export const IconChevronUpCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronUpCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronUpCircleSharp />
      </Icon>
    );
  },
});

export const IconChevronUpOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronUpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronUpOutline />
      </Icon>
    );
  },
});

export const IconChevronUpSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconChevronUpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ChevronUpSharp />
      </Icon>
    );
  },
});

export const IconClipboard = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconClipboard',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Clipboard />
      </Icon>
    );
  },
});

export const IconClipboardOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconClipboardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ClipboardOutline />
      </Icon>
    );
  },
});

export const IconClipboardSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconClipboardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ClipboardSharp />
      </Icon>
    );
  },
});

export const IconClose = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconClose',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Close />
      </Icon>
    );
  },
});

export const IconCloseCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloseCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloseCircle />
      </Icon>
    );
  },
});

export const IconCloseCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloseCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloseCircleOutline />
      </Icon>
    );
  },
});

export const IconCloseCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloseCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloseCircleSharp />
      </Icon>
    );
  },
});

export const IconCloseOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloseOutline />
      </Icon>
    );
  },
});

export const IconCloseSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloseSharp />
      </Icon>
    );
  },
});

export const IconCloud = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloud',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Cloud />
      </Icon>
    );
  },
});

export const IconCloudCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudCircle />
      </Icon>
    );
  },
});

export const IconCloudCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudCircleOutline />
      </Icon>
    );
  },
});

export const IconCloudCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudCircleSharp />
      </Icon>
    );
  },
});

export const IconCloudDone = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudDone',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudDone />
      </Icon>
    );
  },
});

export const IconCloudDoneOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudDoneOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudDoneOutline />
      </Icon>
    );
  },
});

export const IconCloudDoneSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudDoneSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudDoneSharp />
      </Icon>
    );
  },
});

export const IconCloudDownload = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudDownload',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudDownload />
      </Icon>
    );
  },
});

export const IconCloudDownloadOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudDownloadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudDownloadOutline />
      </Icon>
    );
  },
});

export const IconCloudDownloadSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudDownloadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudDownloadSharp />
      </Icon>
    );
  },
});

export const IconCloudOffline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudOffline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudOffline />
      </Icon>
    );
  },
});

export const IconCloudOfflineOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudOfflineOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudOfflineOutline />
      </Icon>
    );
  },
});

export const IconCloudOfflineSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudOfflineSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudOfflineSharp />
      </Icon>
    );
  },
});

export const IconCloudOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudOutline />
      </Icon>
    );
  },
});

export const IconCloudSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudSharp />
      </Icon>
    );
  },
});

export const IconCloudUpload = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudUpload',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudUpload />
      </Icon>
    );
  },
});

export const IconCloudUploadOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudUploadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudUploadOutline />
      </Icon>
    );
  },
});

export const IconCloudUploadSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudUploadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudUploadSharp />
      </Icon>
    );
  },
});

export const IconCloudy = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Cloudy />
      </Icon>
    );
  },
});

export const IconCloudyNight = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudyNight',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudyNight />
      </Icon>
    );
  },
});

export const IconCloudyNightOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudyNightOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudyNightOutline />
      </Icon>
    );
  },
});

export const IconCloudyNightSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudyNightSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudyNightSharp />
      </Icon>
    );
  },
});

export const IconCloudyOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudyOutline />
      </Icon>
    );
  },
});

export const IconCloudySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCloudySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CloudySharp />
      </Icon>
    );
  },
});

export const IconCode = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCode',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Code />
      </Icon>
    );
  },
});

export const IconCodeDownload = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeDownload',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeDownload />
      </Icon>
    );
  },
});

export const IconCodeDownloadOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeDownloadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeDownloadOutline />
      </Icon>
    );
  },
});

export const IconCodeDownloadSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeDownloadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeDownloadSharp />
      </Icon>
    );
  },
});

export const IconCodeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeOutline />
      </Icon>
    );
  },
});

export const IconCodeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeSharp />
      </Icon>
    );
  },
});

export const IconCodeSlash = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeSlash',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeSlash />
      </Icon>
    );
  },
});

export const IconCodeSlashOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeSlashOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeSlashOutline />
      </Icon>
    );
  },
});

export const IconCodeSlashSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeSlashSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeSlashSharp />
      </Icon>
    );
  },
});

export const IconCodeWorking = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeWorking',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeWorking />
      </Icon>
    );
  },
});

export const IconCodeWorkingOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeWorkingOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeWorkingOutline />
      </Icon>
    );
  },
});

export const IconCodeWorkingSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCodeWorkingSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CodeWorkingSharp />
      </Icon>
    );
  },
});

export const IconCog = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCog',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Cog />
      </Icon>
    );
  },
});

export const IconCogOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCogOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CogOutline />
      </Icon>
    );
  },
});

export const IconCogSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCogSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CogSharp />
      </Icon>
    );
  },
});

export const IconColorFill = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorFill',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorFill />
      </Icon>
    );
  },
});

export const IconColorFillOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorFillOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorFillOutline />
      </Icon>
    );
  },
});

export const IconColorFillSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorFillSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorFillSharp />
      </Icon>
    );
  },
});

export const IconColorFilter = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorFilter',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorFilter />
      </Icon>
    );
  },
});

export const IconColorFilterOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorFilterOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorFilterOutline />
      </Icon>
    );
  },
});

export const IconColorFilterSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorFilterSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorFilterSharp />
      </Icon>
    );
  },
});

export const IconColorPalette = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorPalette',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorPalette />
      </Icon>
    );
  },
});

export const IconColorPaletteOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorPaletteOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorPaletteOutline />
      </Icon>
    );
  },
});

export const IconColorPaletteSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorPaletteSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorPaletteSharp />
      </Icon>
    );
  },
});

export const IconColorWand = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorWand',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorWand />
      </Icon>
    );
  },
});

export const IconColorWandOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorWandOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorWandOutline />
      </Icon>
    );
  },
});

export const IconColorWandSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconColorWandSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ColorWandSharp />
      </Icon>
    );
  },
});

export const IconCompass = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCompass',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Compass />
      </Icon>
    );
  },
});

export const IconCompassOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCompassOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CompassOutline />
      </Icon>
    );
  },
});

export const IconCompassSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCompassSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CompassSharp />
      </Icon>
    );
  },
});

export const IconConstruct = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconConstruct',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Construct />
      </Icon>
    );
  },
});

export const IconConstructOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconConstructOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ConstructOutline />
      </Icon>
    );
  },
});

export const IconConstructSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconConstructSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ConstructSharp />
      </Icon>
    );
  },
});

export const IconContract = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconContract',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Contract />
      </Icon>
    );
  },
});

export const IconContractOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconContractOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ContractOutline />
      </Icon>
    );
  },
});

export const IconContractSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconContractSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ContractSharp />
      </Icon>
    );
  },
});

export const IconContrast = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconContrast',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Contrast />
      </Icon>
    );
  },
});

export const IconContrastOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconContrastOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ContrastOutline />
      </Icon>
    );
  },
});

export const IconContrastSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconContrastSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ContrastSharp />
      </Icon>
    );
  },
});

export const IconCopy = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCopy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Copy />
      </Icon>
    );
  },
});

export const IconCopyOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCopyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CopyOutline />
      </Icon>
    );
  },
});

export const IconCopySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCopySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CopySharp />
      </Icon>
    );
  },
});

export const IconCreate = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCreate',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Create />
      </Icon>
    );
  },
});

export const IconCreateOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCreateOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CreateOutline />
      </Icon>
    );
  },
});

export const IconCreateSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCreateSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CreateSharp />
      </Icon>
    );
  },
});

export const IconCrop = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCrop',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Crop />
      </Icon>
    );
  },
});

export const IconCropOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCropOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CropOutline />
      </Icon>
    );
  },
});

export const IconCropSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCropSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CropSharp />
      </Icon>
    );
  },
});

export const IconCube = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCube',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Cube />
      </Icon>
    );
  },
});

export const IconCubeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCubeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CubeOutline />
      </Icon>
    );
  },
});

export const IconCubeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCubeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CubeSharp />
      </Icon>
    );
  },
});

export const IconCut = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCut',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Cut />
      </Icon>
    );
  },
});

export const IconCutOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCutOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CutOutline />
      </Icon>
    );
  },
});

export const IconCutSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconCutSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <CutSharp />
      </Icon>
    );
  },
});

export const IconDesktop = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDesktop',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Desktop />
      </Icon>
    );
  },
});

export const IconDesktopOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDesktopOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DesktopOutline />
      </Icon>
    );
  },
});

export const IconDesktopSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDesktopSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DesktopSharp />
      </Icon>
    );
  },
});

export const IconDiamond = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDiamond',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Diamond />
      </Icon>
    );
  },
});

export const IconDiamondOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDiamondOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DiamondOutline />
      </Icon>
    );
  },
});

export const IconDiamondSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDiamondSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DiamondSharp />
      </Icon>
    );
  },
});

export const IconDice = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDice',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Dice />
      </Icon>
    );
  },
});

export const IconDiceOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDiceOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DiceOutline />
      </Icon>
    );
  },
});

export const IconDiceSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDiceSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DiceSharp />
      </Icon>
    );
  },
});

export const IconDisc = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDisc',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Disc />
      </Icon>
    );
  },
});

export const IconDiscOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDiscOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DiscOutline />
      </Icon>
    );
  },
});

export const IconDiscSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDiscSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DiscSharp />
      </Icon>
    );
  },
});

export const IconDocument = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocument',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Document />
      </Icon>
    );
  },
});

export const IconDocumentAttach = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentAttach',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentAttach />
      </Icon>
    );
  },
});

export const IconDocumentAttachOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentAttachOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentAttachOutline />
      </Icon>
    );
  },
});

export const IconDocumentAttachSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentAttachSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentAttachSharp />
      </Icon>
    );
  },
});

export const IconDocumentLock = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentLock',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentLock />
      </Icon>
    );
  },
});

export const IconDocumentLockOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentLockOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentLockOutline />
      </Icon>
    );
  },
});

export const IconDocumentLockSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentLockSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentLockSharp />
      </Icon>
    );
  },
});

export const IconDocumentOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentOutline />
      </Icon>
    );
  },
});

export const IconDocumentSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentSharp />
      </Icon>
    );
  },
});

export const IconDocumentText = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentText',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentText />
      </Icon>
    );
  },
});

export const IconDocumentTextOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentTextOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentTextOutline />
      </Icon>
    );
  },
});

export const IconDocumentTextSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentTextSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentTextSharp />
      </Icon>
    );
  },
});

export const IconDocuments = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocuments',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Documents />
      </Icon>
    );
  },
});

export const IconDocumentsOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentsOutline />
      </Icon>
    );
  },
});

export const IconDocumentsSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDocumentsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DocumentsSharp />
      </Icon>
    );
  },
});

export const IconDownload = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDownload',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Download />
      </Icon>
    );
  },
});

export const IconDownloadOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDownloadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DownloadOutline />
      </Icon>
    );
  },
});

export const IconDownloadSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDownloadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DownloadSharp />
      </Icon>
    );
  },
});

export const IconDuplicate = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDuplicate',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Duplicate />
      </Icon>
    );
  },
});

export const IconDuplicateOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDuplicateOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DuplicateOutline />
      </Icon>
    );
  },
});

export const IconDuplicateSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconDuplicateSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <DuplicateSharp />
      </Icon>
    );
  },
});

export const IconEar = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEar',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Ear />
      </Icon>
    );
  },
});

export const IconEarOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEarOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EarOutline />
      </Icon>
    );
  },
});

export const IconEarSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEarSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EarSharp />
      </Icon>
    );
  },
});

export const IconEarth = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEarth',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Earth />
      </Icon>
    );
  },
});

export const IconEarthOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEarthOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EarthOutline />
      </Icon>
    );
  },
});

export const IconEarthSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEarthSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EarthSharp />
      </Icon>
    );
  },
});

export const IconEasel = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEasel',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Easel />
      </Icon>
    );
  },
});

export const IconEaselOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEaselOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EaselOutline />
      </Icon>
    );
  },
});

export const IconEaselSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEaselSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EaselSharp />
      </Icon>
    );
  },
});

export const IconEgg = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEgg',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Egg />
      </Icon>
    );
  },
});

export const IconEggOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEggOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EggOutline />
      </Icon>
    );
  },
});

export const IconEggSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEggSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EggSharp />
      </Icon>
    );
  },
});

export const IconEllipse = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipse',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Ellipse />
      </Icon>
    );
  },
});

export const IconEllipseOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipseOutline />
      </Icon>
    );
  },
});

export const IconEllipseSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipseSharp />
      </Icon>
    );
  },
});

export const IconEllipsisHorizontal = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipsisHorizontal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipsisHorizontal />
      </Icon>
    );
  },
});

export const IconEllipsisHorizontalCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipsisHorizontalCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipsisHorizontalCircle />
      </Icon>
    );
  },
});

export const IconEllipsisHorizontalCircleOutline =
  /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
    name: 'IconEllipsisHorizontalCircleOutline',
    props: iconProps as any,
    setup: (props) => {
      return () => (
        <Icon {...props}>
          <EllipsisHorizontalCircleOutline />
        </Icon>
      );
    },
  });

export const IconEllipsisHorizontalCircleSharp =
  /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
    name: 'IconEllipsisHorizontalCircleSharp',
    props: iconProps as any,
    setup: (props) => {
      return () => (
        <Icon {...props}>
          <EllipsisHorizontalCircleSharp />
        </Icon>
      );
    },
  });

export const IconEllipsisHorizontalOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipsisHorizontalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipsisHorizontalOutline />
      </Icon>
    );
  },
});

export const IconEllipsisHorizontalSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipsisHorizontalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipsisHorizontalSharp />
      </Icon>
    );
  },
});

export const IconEllipsisVertical = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipsisVertical',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipsisVertical />
      </Icon>
    );
  },
});

export const IconEllipsisVerticalCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipsisVerticalCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipsisVerticalCircle />
      </Icon>
    );
  },
});

export const IconEllipsisVerticalCircleOutline =
  /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
    name: 'IconEllipsisVerticalCircleOutline',
    props: iconProps as any,
    setup: (props) => {
      return () => (
        <Icon {...props}>
          <EllipsisVerticalCircleOutline />
        </Icon>
      );
    },
  });

export const IconEllipsisVerticalCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipsisVerticalCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipsisVerticalCircleSharp />
      </Icon>
    );
  },
});

export const IconEllipsisVerticalOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipsisVerticalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipsisVerticalOutline />
      </Icon>
    );
  },
});

export const IconEllipsisVerticalSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEllipsisVerticalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EllipsisVerticalSharp />
      </Icon>
    );
  },
});

export const IconEnter = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEnter',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Enter />
      </Icon>
    );
  },
});

export const IconEnterOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEnterOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EnterOutline />
      </Icon>
    );
  },
});

export const IconEnterSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEnterSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EnterSharp />
      </Icon>
    );
  },
});

export const IconExit = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconExit',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Exit />
      </Icon>
    );
  },
});

export const IconExitOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconExitOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ExitOutline />
      </Icon>
    );
  },
});

export const IconExitSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconExitSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ExitSharp />
      </Icon>
    );
  },
});

export const IconExpand = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconExpand',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Expand />
      </Icon>
    );
  },
});

export const IconExpandOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconExpandOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ExpandOutline />
      </Icon>
    );
  },
});

export const IconExpandSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconExpandSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ExpandSharp />
      </Icon>
    );
  },
});

export const IconExtensionPuzzle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconExtensionPuzzle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ExtensionPuzzle />
      </Icon>
    );
  },
});

export const IconExtensionPuzzleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconExtensionPuzzleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ExtensionPuzzleOutline />
      </Icon>
    );
  },
});

export const IconExtensionPuzzleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconExtensionPuzzleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ExtensionPuzzleSharp />
      </Icon>
    );
  },
});

export const IconEye = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEye',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Eye />
      </Icon>
    );
  },
});

export const IconEyeOff = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEyeOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EyeOff />
      </Icon>
    );
  },
});

export const IconEyeOffOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEyeOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EyeOffOutline />
      </Icon>
    );
  },
});

export const IconEyeOffSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEyeOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EyeOffSharp />
      </Icon>
    );
  },
});

export const IconEyeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEyeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EyeOutline />
      </Icon>
    );
  },
});

export const IconEyeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEyeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EyeSharp />
      </Icon>
    );
  },
});

export const IconEyedrop = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEyedrop',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Eyedrop />
      </Icon>
    );
  },
});

export const IconEyedropOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEyedropOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EyedropOutline />
      </Icon>
    );
  },
});

export const IconEyedropSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconEyedropSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <EyedropSharp />
      </Icon>
    );
  },
});

export const IconFastFood = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFastFood',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FastFood />
      </Icon>
    );
  },
});

export const IconFastFoodOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFastFoodOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FastFoodOutline />
      </Icon>
    );
  },
});

export const IconFastFoodSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFastFoodSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FastFoodSharp />
      </Icon>
    );
  },
});

export const IconFemale = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFemale',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Female />
      </Icon>
    );
  },
});

export const IconFemaleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFemaleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FemaleOutline />
      </Icon>
    );
  },
});

export const IconFemaleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFemaleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FemaleSharp />
      </Icon>
    );
  },
});

export const IconFileTray = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFileTray',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FileTray />
      </Icon>
    );
  },
});

export const IconFileTrayFull = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFileTrayFull',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FileTrayFull />
      </Icon>
    );
  },
});

export const IconFileTrayFullOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFileTrayFullOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FileTrayFullOutline />
      </Icon>
    );
  },
});

export const IconFileTrayFullSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFileTrayFullSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FileTrayFullSharp />
      </Icon>
    );
  },
});

export const IconFileTrayOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFileTrayOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FileTrayOutline />
      </Icon>
    );
  },
});

export const IconFileTraySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFileTraySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FileTraySharp />
      </Icon>
    );
  },
});

export const IconFileTrayStacked = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFileTrayStacked',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FileTrayStacked />
      </Icon>
    );
  },
});

export const IconFileTrayStackedOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFileTrayStackedOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FileTrayStackedOutline />
      </Icon>
    );
  },
});

export const IconFileTrayStackedSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFileTrayStackedSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FileTrayStackedSharp />
      </Icon>
    );
  },
});

export const IconFilm = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFilm',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Film />
      </Icon>
    );
  },
});

export const IconFilmOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFilmOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FilmOutline />
      </Icon>
    );
  },
});

export const IconFilmSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFilmSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FilmSharp />
      </Icon>
    );
  },
});

export const IconFilter = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFilter',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Filter />
      </Icon>
    );
  },
});

export const IconFilterCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFilterCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FilterCircle />
      </Icon>
    );
  },
});

export const IconFilterCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFilterCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FilterCircleOutline />
      </Icon>
    );
  },
});

export const IconFilterCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFilterCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FilterCircleSharp />
      </Icon>
    );
  },
});

export const IconFilterOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFilterOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FilterOutline />
      </Icon>
    );
  },
});

export const IconFilterSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFilterSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FilterSharp />
      </Icon>
    );
  },
});

export const IconFingerPrint = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFingerPrint',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FingerPrint />
      </Icon>
    );
  },
});

export const IconFingerPrintOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFingerPrintOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FingerPrintOutline />
      </Icon>
    );
  },
});

export const IconFingerPrintSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFingerPrintSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FingerPrintSharp />
      </Icon>
    );
  },
});

export const IconFish = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFish',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Fish />
      </Icon>
    );
  },
});

export const IconFishOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFishOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FishOutline />
      </Icon>
    );
  },
});

export const IconFishSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFishSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FishSharp />
      </Icon>
    );
  },
});

export const IconFitness = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFitness',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Fitness />
      </Icon>
    );
  },
});

export const IconFitnessOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFitnessOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FitnessOutline />
      </Icon>
    );
  },
});

export const IconFitnessSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFitnessSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FitnessSharp />
      </Icon>
    );
  },
});

export const IconFlag = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlag',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Flag />
      </Icon>
    );
  },
});

export const IconFlagOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlagOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlagOutline />
      </Icon>
    );
  },
});

export const IconFlagSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlagSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlagSharp />
      </Icon>
    );
  },
});

export const IconFlame = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlame',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Flame />
      </Icon>
    );
  },
});

export const IconFlameOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlameOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlameOutline />
      </Icon>
    );
  },
});

export const IconFlameSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlameSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlameSharp />
      </Icon>
    );
  },
});

export const IconFlash = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlash',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Flash />
      </Icon>
    );
  },
});

export const IconFlashOff = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlashOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlashOff />
      </Icon>
    );
  },
});

export const IconFlashOffOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlashOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlashOffOutline />
      </Icon>
    );
  },
});

export const IconFlashOffSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlashOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlashOffSharp />
      </Icon>
    );
  },
});

export const IconFlashOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlashOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlashOutline />
      </Icon>
    );
  },
});

export const IconFlashSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlashSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlashSharp />
      </Icon>
    );
  },
});

export const IconFlashlight = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlashlight',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Flashlight />
      </Icon>
    );
  },
});

export const IconFlashlightOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlashlightOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlashlightOutline />
      </Icon>
    );
  },
});

export const IconFlashlightSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlashlightSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlashlightSharp />
      </Icon>
    );
  },
});

export const IconFlask = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlask',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Flask />
      </Icon>
    );
  },
});

export const IconFlaskOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlaskOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlaskOutline />
      </Icon>
    );
  },
});

export const IconFlaskSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlaskSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlaskSharp />
      </Icon>
    );
  },
});

export const IconFlower = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlower',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Flower />
      </Icon>
    );
  },
});

export const IconFlowerOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlowerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlowerOutline />
      </Icon>
    );
  },
});

export const IconFlowerSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFlowerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FlowerSharp />
      </Icon>
    );
  },
});

export const IconFolder = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFolder',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Folder />
      </Icon>
    );
  },
});

export const IconFolderOpen = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFolderOpen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FolderOpen />
      </Icon>
    );
  },
});

export const IconFolderOpenOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFolderOpenOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FolderOpenOutline />
      </Icon>
    );
  },
});

export const IconFolderOpenSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFolderOpenSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FolderOpenSharp />
      </Icon>
    );
  },
});

export const IconFolderOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFolderOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FolderOutline />
      </Icon>
    );
  },
});

export const IconFolderSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFolderSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FolderSharp />
      </Icon>
    );
  },
});

export const IconFootball = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFootball',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Football />
      </Icon>
    );
  },
});

export const IconFootballOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFootballOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FootballOutline />
      </Icon>
    );
  },
});

export const IconFootballSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFootballSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FootballSharp />
      </Icon>
    );
  },
});

export const IconFootsteps = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFootsteps',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Footsteps />
      </Icon>
    );
  },
});

export const IconFootstepsOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFootstepsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FootstepsOutline />
      </Icon>
    );
  },
});

export const IconFootstepsSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFootstepsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FootstepsSharp />
      </Icon>
    );
  },
});

export const IconFunnel = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFunnel',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Funnel />
      </Icon>
    );
  },
});

export const IconFunnelOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFunnelOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FunnelOutline />
      </Icon>
    );
  },
});

export const IconFunnelSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconFunnelSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <FunnelSharp />
      </Icon>
    );
  },
});

export const IconGameController = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGameController',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GameController />
      </Icon>
    );
  },
});

export const IconGameControllerOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGameControllerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GameControllerOutline />
      </Icon>
    );
  },
});

export const IconGameControllerSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGameControllerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GameControllerSharp />
      </Icon>
    );
  },
});

export const IconGift = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGift',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Gift />
      </Icon>
    );
  },
});

export const IconGiftOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGiftOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GiftOutline />
      </Icon>
    );
  },
});

export const IconGiftSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGiftSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GiftSharp />
      </Icon>
    );
  },
});

export const IconGitBranch = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitBranch',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitBranch />
      </Icon>
    );
  },
});

export const IconGitBranchOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitBranchOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitBranchOutline />
      </Icon>
    );
  },
});

export const IconGitBranchSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitBranchSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitBranchSharp />
      </Icon>
    );
  },
});

export const IconGitCommit = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitCommit',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitCommit />
      </Icon>
    );
  },
});

export const IconGitCommitOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitCommitOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitCommitOutline />
      </Icon>
    );
  },
});

export const IconGitCommitSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitCommitSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitCommitSharp />
      </Icon>
    );
  },
});

export const IconGitCompare = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitCompare',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitCompare />
      </Icon>
    );
  },
});

export const IconGitCompareOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitCompareOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitCompareOutline />
      </Icon>
    );
  },
});

export const IconGitCompareSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitCompareSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitCompareSharp />
      </Icon>
    );
  },
});

export const IconGitMerge = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitMerge',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitMerge />
      </Icon>
    );
  },
});

export const IconGitMergeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitMergeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitMergeOutline />
      </Icon>
    );
  },
});

export const IconGitMergeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitMergeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitMergeSharp />
      </Icon>
    );
  },
});

export const IconGitNetwork = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitNetwork',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitNetwork />
      </Icon>
    );
  },
});

export const IconGitNetworkOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitNetworkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitNetworkOutline />
      </Icon>
    );
  },
});

export const IconGitNetworkSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitNetworkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitNetworkSharp />
      </Icon>
    );
  },
});

export const IconGitPullRequest = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitPullRequest',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitPullRequest />
      </Icon>
    );
  },
});

export const IconGitPullRequestOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitPullRequestOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitPullRequestOutline />
      </Icon>
    );
  },
});

export const IconGitPullRequestSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGitPullRequestSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GitPullRequestSharp />
      </Icon>
    );
  },
});

export const IconGlasses = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGlasses',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Glasses />
      </Icon>
    );
  },
});

export const IconGlassesOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGlassesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GlassesOutline />
      </Icon>
    );
  },
});

export const IconGlassesSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGlassesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GlassesSharp />
      </Icon>
    );
  },
});

export const IconGlobe = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGlobe',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Globe />
      </Icon>
    );
  },
});

export const IconGlobeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGlobeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GlobeOutline />
      </Icon>
    );
  },
});

export const IconGlobeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGlobeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GlobeSharp />
      </Icon>
    );
  },
});

export const IconGolf = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGolf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Golf />
      </Icon>
    );
  },
});

export const IconGolfOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGolfOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GolfOutline />
      </Icon>
    );
  },
});

export const IconGolfSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGolfSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GolfSharp />
      </Icon>
    );
  },
});

export const IconGrid = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGrid',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Grid />
      </Icon>
    );
  },
});

export const IconGridOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGridOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GridOutline />
      </Icon>
    );
  },
});

export const IconGridSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconGridSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <GridSharp />
      </Icon>
    );
  },
});

export const IconHammer = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHammer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Hammer />
      </Icon>
    );
  },
});

export const IconHammerOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHammerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HammerOutline />
      </Icon>
    );
  },
});

export const IconHammerSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHammerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HammerSharp />
      </Icon>
    );
  },
});

export const IconHandLeft = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHandLeft',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HandLeft />
      </Icon>
    );
  },
});

export const IconHandLeftOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHandLeftOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HandLeftOutline />
      </Icon>
    );
  },
});

export const IconHandLeftSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHandLeftSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HandLeftSharp />
      </Icon>
    );
  },
});

export const IconHandRight = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHandRight',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HandRight />
      </Icon>
    );
  },
});

export const IconHandRightOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHandRightOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HandRightOutline />
      </Icon>
    );
  },
});

export const IconHandRightSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHandRightSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HandRightSharp />
      </Icon>
    );
  },
});

export const IconHappy = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHappy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Happy />
      </Icon>
    );
  },
});

export const IconHappyOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHappyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HappyOutline />
      </Icon>
    );
  },
});

export const IconHappySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHappySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HappySharp />
      </Icon>
    );
  },
});

export const IconHardwareChip = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHardwareChip',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HardwareChip />
      </Icon>
    );
  },
});

export const IconHardwareChipOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHardwareChipOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HardwareChipOutline />
      </Icon>
    );
  },
});

export const IconHardwareChipSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHardwareChipSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HardwareChipSharp />
      </Icon>
    );
  },
});

export const IconHeadset = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeadset',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Headset />
      </Icon>
    );
  },
});

export const IconHeadsetOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeadsetOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeadsetOutline />
      </Icon>
    );
  },
});

export const IconHeadsetSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeadsetSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeadsetSharp />
      </Icon>
    );
  },
});

export const IconHeart = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Heart />
      </Icon>
    );
  },
});

export const IconHeartCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartCircle />
      </Icon>
    );
  },
});

export const IconHeartCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartCircleOutline />
      </Icon>
    );
  },
});

export const IconHeartCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartCircleSharp />
      </Icon>
    );
  },
});

export const IconHeartDislike = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartDislike',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartDislike />
      </Icon>
    );
  },
});

export const IconHeartDislikeCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartDislikeCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartDislikeCircle />
      </Icon>
    );
  },
});

export const IconHeartDislikeCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartDislikeCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartDislikeCircleOutline />
      </Icon>
    );
  },
});

export const IconHeartDislikeCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartDislikeCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartDislikeCircleSharp />
      </Icon>
    );
  },
});

export const IconHeartDislikeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartDislikeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartDislikeOutline />
      </Icon>
    );
  },
});

export const IconHeartDislikeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartDislikeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartDislikeSharp />
      </Icon>
    );
  },
});

export const IconHeartHalf = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartHalf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartHalf />
      </Icon>
    );
  },
});

export const IconHeartHalfOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartHalfOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartHalfOutline />
      </Icon>
    );
  },
});

export const IconHeartHalfSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartHalfSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartHalfSharp />
      </Icon>
    );
  },
});

export const IconHeartOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartOutline />
      </Icon>
    );
  },
});

export const IconHeartSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHeartSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HeartSharp />
      </Icon>
    );
  },
});

export const IconHelp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHelp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Help />
      </Icon>
    );
  },
});

export const IconHelpBuoy = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHelpBuoy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HelpBuoy />
      </Icon>
    );
  },
});

export const IconHelpBuoyOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHelpBuoyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HelpBuoyOutline />
      </Icon>
    );
  },
});

export const IconHelpBuoySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHelpBuoySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HelpBuoySharp />
      </Icon>
    );
  },
});

export const IconHelpCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHelpCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HelpCircle />
      </Icon>
    );
  },
});

export const IconHelpCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHelpCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HelpCircleOutline />
      </Icon>
    );
  },
});

export const IconHelpCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHelpCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HelpCircleSharp />
      </Icon>
    );
  },
});

export const IconHelpOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHelpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HelpOutline />
      </Icon>
    );
  },
});

export const IconHelpSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHelpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HelpSharp />
      </Icon>
    );
  },
});

export const IconHome = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHome',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Home />
      </Icon>
    );
  },
});

export const IconHomeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHomeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HomeOutline />
      </Icon>
    );
  },
});

export const IconHomeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHomeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HomeSharp />
      </Icon>
    );
  },
});

export const IconHourglass = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHourglass',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Hourglass />
      </Icon>
    );
  },
});

export const IconHourglassOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHourglassOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HourglassOutline />
      </Icon>
    );
  },
});

export const IconHourglassSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconHourglassSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <HourglassSharp />
      </Icon>
    );
  },
});

export const IconIceCream = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconIceCream',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <IceCream />
      </Icon>
    );
  },
});

export const IconIceCreamOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconIceCreamOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <IceCreamOutline />
      </Icon>
    );
  },
});

export const IconIceCreamSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconIceCreamSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <IceCreamSharp />
      </Icon>
    );
  },
});

export const IconIdCard = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconIdCard',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <IdCard />
      </Icon>
    );
  },
});

export const IconIdCardOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconIdCardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <IdCardOutline />
      </Icon>
    );
  },
});

export const IconIdCardSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconIdCardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <IdCardSharp />
      </Icon>
    );
  },
});

export const IconImage = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconImage',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Image />
      </Icon>
    );
  },
});

export const IconImageOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconImageOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ImageOutline />
      </Icon>
    );
  },
});

export const IconImageSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconImageSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ImageSharp />
      </Icon>
    );
  },
});

export const IconImages = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconImages',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Images />
      </Icon>
    );
  },
});

export const IconImagesOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconImagesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ImagesOutline />
      </Icon>
    );
  },
});

export const IconImagesSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconImagesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ImagesSharp />
      </Icon>
    );
  },
});

export const IconInfinite = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInfinite',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Infinite />
      </Icon>
    );
  },
});

export const IconInfiniteOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInfiniteOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <InfiniteOutline />
      </Icon>
    );
  },
});

export const IconInfiniteSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInfiniteSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <InfiniteSharp />
      </Icon>
    );
  },
});

export const IconInformation = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInformation',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Information />
      </Icon>
    );
  },
});

export const IconInformationCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInformationCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <InformationCircle />
      </Icon>
    );
  },
});

export const IconInformationCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInformationCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <InformationCircleOutline />
      </Icon>
    );
  },
});

export const IconInformationCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInformationCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <InformationCircleSharp />
      </Icon>
    );
  },
});

export const IconInformationOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInformationOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <InformationOutline />
      </Icon>
    );
  },
});

export const IconInformationSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInformationSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <InformationSharp />
      </Icon>
    );
  },
});

export const IconInvertMode = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInvertMode',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <InvertMode />
      </Icon>
    );
  },
});

export const IconInvertModeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInvertModeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <InvertModeOutline />
      </Icon>
    );
  },
});

export const IconInvertModeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconInvertModeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <InvertModeSharp />
      </Icon>
    );
  },
});

export const IconJournal = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconJournal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Journal />
      </Icon>
    );
  },
});

export const IconJournalOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconJournalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <JournalOutline />
      </Icon>
    );
  },
});

export const IconJournalSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconJournalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <JournalSharp />
      </Icon>
    );
  },
});

export const IconKey = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconKey',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Key />
      </Icon>
    );
  },
});

export const IconKeyOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconKeyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <KeyOutline />
      </Icon>
    );
  },
});

export const IconKeySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconKeySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <KeySharp />
      </Icon>
    );
  },
});

export const IconKeypad = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconKeypad',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Keypad />
      </Icon>
    );
  },
});

export const IconKeypadOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconKeypadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <KeypadOutline />
      </Icon>
    );
  },
});

export const IconKeypadSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconKeypadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <KeypadSharp />
      </Icon>
    );
  },
});

export const IconLanguage = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLanguage',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Language />
      </Icon>
    );
  },
});

export const IconLanguageOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLanguageOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LanguageOutline />
      </Icon>
    );
  },
});

export const IconLanguageSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLanguageSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LanguageSharp />
      </Icon>
    );
  },
});

export const IconLaptop = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLaptop',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Laptop />
      </Icon>
    );
  },
});

export const IconLaptopOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLaptopOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LaptopOutline />
      </Icon>
    );
  },
});

export const IconLaptopSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLaptopSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LaptopSharp />
      </Icon>
    );
  },
});

export const IconLayers = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLayers',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Layers />
      </Icon>
    );
  },
});

export const IconLayersOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLayersOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LayersOutline />
      </Icon>
    );
  },
});

export const IconLayersSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLayersSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LayersSharp />
      </Icon>
    );
  },
});

export const IconLeaf = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLeaf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Leaf />
      </Icon>
    );
  },
});

export const IconLeafOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLeafOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LeafOutline />
      </Icon>
    );
  },
});

export const IconLeafSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLeafSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LeafSharp />
      </Icon>
    );
  },
});

export const IconLibrary = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLibrary',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Library />
      </Icon>
    );
  },
});

export const IconLibraryOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLibraryOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LibraryOutline />
      </Icon>
    );
  },
});

export const IconLibrarySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLibrarySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LibrarySharp />
      </Icon>
    );
  },
});

export const IconLink = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLink',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Link />
      </Icon>
    );
  },
});

export const IconLinkOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLinkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LinkOutline />
      </Icon>
    );
  },
});

export const IconLinkSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLinkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LinkSharp />
      </Icon>
    );
  },
});

export const IconList = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconList',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <List />
      </Icon>
    );
  },
});

export const IconListCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconListCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ListCircle />
      </Icon>
    );
  },
});

export const IconListCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconListCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ListCircleOutline />
      </Icon>
    );
  },
});

export const IconListCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconListCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ListCircleSharp />
      </Icon>
    );
  },
});

export const IconListOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconListOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ListOutline />
      </Icon>
    );
  },
});

export const IconListSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconListSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ListSharp />
      </Icon>
    );
  },
});

export const IconLocate = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLocate',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Locate />
      </Icon>
    );
  },
});

export const IconLocateOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLocateOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LocateOutline />
      </Icon>
    );
  },
});

export const IconLocateSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLocateSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LocateSharp />
      </Icon>
    );
  },
});

export const IconLocation = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLocation',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Location />
      </Icon>
    );
  },
});

export const IconLocationOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLocationOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LocationOutline />
      </Icon>
    );
  },
});

export const IconLocationSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLocationSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LocationSharp />
      </Icon>
    );
  },
});

export const IconLockClosed = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLockClosed',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LockClosed />
      </Icon>
    );
  },
});

export const IconLockClosedOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLockClosedOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LockClosedOutline />
      </Icon>
    );
  },
});

export const IconLockClosedSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLockClosedSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LockClosedSharp />
      </Icon>
    );
  },
});

export const IconLockOpen = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLockOpen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LockOpen />
      </Icon>
    );
  },
});

export const IconLockOpenOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLockOpenOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LockOpenOutline />
      </Icon>
    );
  },
});

export const IconLockOpenSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLockOpenSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LockOpenSharp />
      </Icon>
    );
  },
});

export const IconLogIn = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogIn',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogIn />
      </Icon>
    );
  },
});

export const IconLogInOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogInOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogInOutline />
      </Icon>
    );
  },
});

export const IconLogInSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogInSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogInSharp />
      </Icon>
    );
  },
});

export const IconLogOut = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogOut',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogOut />
      </Icon>
    );
  },
});

export const IconLogOutOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogOutOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogOutOutline />
      </Icon>
    );
  },
});

export const IconLogOutSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogOutSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogOutSharp />
      </Icon>
    );
  },
});

export const IconLogoAlipay = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoAlipay',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoAlipay />
      </Icon>
    );
  },
});

export const IconLogoAmazon = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoAmazon',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoAmazon />
      </Icon>
    );
  },
});

export const IconLogoAmplify = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoAmplify',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoAmplify />
      </Icon>
    );
  },
});

export const IconLogoAndroid = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoAndroid',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoAndroid />
      </Icon>
    );
  },
});

export const IconLogoAngular = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoAngular',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoAngular />
      </Icon>
    );
  },
});

export const IconLogoApple = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoApple',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoApple />
      </Icon>
    );
  },
});

export const IconLogoAppleAppstore = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoAppleAppstore',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoAppleAppstore />
      </Icon>
    );
  },
});

export const IconLogoAppleAr = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoAppleAr',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoAppleAr />
      </Icon>
    );
  },
});

export const IconLogoBehance = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoBehance',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoBehance />
      </Icon>
    );
  },
});

export const IconLogoBitbucket = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoBitbucket',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoBitbucket />
      </Icon>
    );
  },
});

export const IconLogoBitcoin = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoBitcoin',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoBitcoin />
      </Icon>
    );
  },
});

export const IconLogoBuffer = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoBuffer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoBuffer />
      </Icon>
    );
  },
});

export const IconLogoCapacitor = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoCapacitor',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoCapacitor />
      </Icon>
    );
  },
});

export const IconLogoChrome = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoChrome',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoChrome />
      </Icon>
    );
  },
});

export const IconLogoClosedCaptioning = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoClosedCaptioning',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoClosedCaptioning />
      </Icon>
    );
  },
});

export const IconLogoCodepen = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoCodepen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoCodepen />
      </Icon>
    );
  },
});

export const IconLogoCss3 = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoCss3',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoCss3 />
      </Icon>
    );
  },
});

export const IconLogoDesignernews = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoDesignernews',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoDesignernews />
      </Icon>
    );
  },
});

export const IconLogoDeviantart = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoDeviantart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoDeviantart />
      </Icon>
    );
  },
});

export const IconLogoDiscord = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoDiscord',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoDiscord />
      </Icon>
    );
  },
});

export const IconLogoDocker = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoDocker',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoDocker />
      </Icon>
    );
  },
});

export const IconLogoDribbble = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoDribbble',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoDribbble />
      </Icon>
    );
  },
});

export const IconLogoDropbox = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoDropbox',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoDropbox />
      </Icon>
    );
  },
});

export const IconLogoEdge = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoEdge',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoEdge />
      </Icon>
    );
  },
});

export const IconLogoElectron = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoElectron',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoElectron />
      </Icon>
    );
  },
});

export const IconLogoEuro = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoEuro',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoEuro />
      </Icon>
    );
  },
});

export const IconLogoFacebook = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoFacebook',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoFacebook />
      </Icon>
    );
  },
});

export const IconLogoFigma = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoFigma',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoFigma />
      </Icon>
    );
  },
});

export const IconLogoFirebase = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoFirebase',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoFirebase />
      </Icon>
    );
  },
});

export const IconLogoFirefox = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoFirefox',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoFirefox />
      </Icon>
    );
  },
});

export const IconLogoFlickr = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoFlickr',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoFlickr />
      </Icon>
    );
  },
});

export const IconLogoFoursquare = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoFoursquare',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoFoursquare />
      </Icon>
    );
  },
});

export const IconLogoGithub = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoGithub',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoGithub />
      </Icon>
    );
  },
});

export const IconLogoGitlab = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoGitlab',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoGitlab />
      </Icon>
    );
  },
});

export const IconLogoGoogle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoGoogle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoGoogle />
      </Icon>
    );
  },
});

export const IconLogoGooglePlaystore = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoGooglePlaystore',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoGooglePlaystore />
      </Icon>
    );
  },
});

export const IconLogoHackernews = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoHackernews',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoHackernews />
      </Icon>
    );
  },
});

export const IconLogoHtml5 = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoHtml5',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoHtml5 />
      </Icon>
    );
  },
});

export const IconLogoInstagram = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoInstagram',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoInstagram />
      </Icon>
    );
  },
});

export const IconLogoIonic = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoIonic',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoIonic />
      </Icon>
    );
  },
});

export const IconLogoIonitron = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoIonitron',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoIonitron />
      </Icon>
    );
  },
});

export const IconLogoJavascript = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoJavascript',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoJavascript />
      </Icon>
    );
  },
});

export const IconLogoLaravel = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoLaravel',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoLaravel />
      </Icon>
    );
  },
});

export const IconLogoLinkedin = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoLinkedin',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoLinkedin />
      </Icon>
    );
  },
});

export const IconLogoMarkdown = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoMarkdown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoMarkdown />
      </Icon>
    );
  },
});

export const IconLogoMastodon = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoMastodon',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoMastodon />
      </Icon>
    );
  },
});

export const IconLogoMedium = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoMedium',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoMedium />
      </Icon>
    );
  },
});

export const IconLogoMicrosoft = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoMicrosoft',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoMicrosoft />
      </Icon>
    );
  },
});

export const IconLogoNoSmoking = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoNoSmoking',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoNoSmoking />
      </Icon>
    );
  },
});

export const IconLogoNodejs = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoNodejs',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoNodejs />
      </Icon>
    );
  },
});

export const IconLogoNpm = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoNpm',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoNpm />
      </Icon>
    );
  },
});

export const IconLogoOctocat = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoOctocat',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoOctocat />
      </Icon>
    );
  },
});

export const IconLogoPaypal = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoPaypal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoPaypal />
      </Icon>
    );
  },
});

export const IconLogoPinterest = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoPinterest',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoPinterest />
      </Icon>
    );
  },
});

export const IconLogoPlaystation = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoPlaystation',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoPlaystation />
      </Icon>
    );
  },
});

export const IconLogoPwa = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoPwa',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoPwa />
      </Icon>
    );
  },
});

export const IconLogoPython = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoPython',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoPython />
      </Icon>
    );
  },
});

export const IconLogoReact = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoReact',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoReact />
      </Icon>
    );
  },
});

export const IconLogoReddit = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoReddit',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoReddit />
      </Icon>
    );
  },
});

export const IconLogoRss = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoRss',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoRss />
      </Icon>
    );
  },
});

export const IconLogoSass = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoSass',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoSass />
      </Icon>
    );
  },
});

export const IconLogoSkype = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoSkype',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoSkype />
      </Icon>
    );
  },
});

export const IconLogoSlack = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoSlack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoSlack />
      </Icon>
    );
  },
});

export const IconLogoSnapchat = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoSnapchat',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoSnapchat />
      </Icon>
    );
  },
});

export const IconLogoSoundcloud = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoSoundcloud',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoSoundcloud />
      </Icon>
    );
  },
});

export const IconLogoStackoverflow = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoStackoverflow',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoStackoverflow />
      </Icon>
    );
  },
});

export const IconLogoSteam = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoSteam',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoSteam />
      </Icon>
    );
  },
});

export const IconLogoStencil = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoStencil',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoStencil />
      </Icon>
    );
  },
});

export const IconLogoTableau = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoTableau',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoTableau />
      </Icon>
    );
  },
});

export const IconLogoTiktok = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoTiktok',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoTiktok />
      </Icon>
    );
  },
});

export const IconLogoTumblr = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoTumblr',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoTumblr />
      </Icon>
    );
  },
});

export const IconLogoTux = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoTux',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoTux />
      </Icon>
    );
  },
});

export const IconLogoTwitch = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoTwitch',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoTwitch />
      </Icon>
    );
  },
});

export const IconLogoTwitter = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoTwitter',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoTwitter />
      </Icon>
    );
  },
});

export const IconLogoUsd = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoUsd',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoUsd />
      </Icon>
    );
  },
});

export const IconLogoVenmo = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoVenmo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoVenmo />
      </Icon>
    );
  },
});

export const IconLogoVercel = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoVercel',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoVercel />
      </Icon>
    );
  },
});

export const IconLogoVimeo = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoVimeo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoVimeo />
      </Icon>
    );
  },
});

export const IconLogoVk = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoVk',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoVk />
      </Icon>
    );
  },
});

export const IconLogoVue = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoVue',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoVue />
      </Icon>
    );
  },
});

export const IconLogoWebComponent = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoWebComponent',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoWebComponent />
      </Icon>
    );
  },
});

export const IconLogoWechat = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoWechat',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoWechat />
      </Icon>
    );
  },
});

export const IconLogoWhatsapp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoWhatsapp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoWhatsapp />
      </Icon>
    );
  },
});

export const IconLogoWindows = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoWindows',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoWindows />
      </Icon>
    );
  },
});

export const IconLogoWordpress = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoWordpress',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoWordpress />
      </Icon>
    );
  },
});

export const IconLogoXbox = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoXbox',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoXbox />
      </Icon>
    );
  },
});

export const IconLogoXing = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoXing',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoXing />
      </Icon>
    );
  },
});

export const IconLogoYahoo = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoYahoo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoYahoo />
      </Icon>
    );
  },
});

export const IconLogoYen = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoYen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoYen />
      </Icon>
    );
  },
});

export const IconLogoYoutube = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconLogoYoutube',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <LogoYoutube />
      </Icon>
    );
  },
});

export const IconMagnet = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMagnet',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Magnet />
      </Icon>
    );
  },
});

export const IconMagnetOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMagnetOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MagnetOutline />
      </Icon>
    );
  },
});

export const IconMagnetSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMagnetSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MagnetSharp />
      </Icon>
    );
  },
});

export const IconMail = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMail',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Mail />
      </Icon>
    );
  },
});

export const IconMailOpen = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMailOpen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MailOpen />
      </Icon>
    );
  },
});

export const IconMailOpenOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMailOpenOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MailOpenOutline />
      </Icon>
    );
  },
});

export const IconMailOpenSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMailOpenSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MailOpenSharp />
      </Icon>
    );
  },
});

export const IconMailOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMailOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MailOutline />
      </Icon>
    );
  },
});

export const IconMailSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMailSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MailSharp />
      </Icon>
    );
  },
});

export const IconMailUnread = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMailUnread',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MailUnread />
      </Icon>
    );
  },
});

export const IconMailUnreadOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMailUnreadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MailUnreadOutline />
      </Icon>
    );
  },
});

export const IconMailUnreadSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMailUnreadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MailUnreadSharp />
      </Icon>
    );
  },
});

export const IconMale = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMale',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Male />
      </Icon>
    );
  },
});

export const IconMaleFemale = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMaleFemale',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MaleFemale />
      </Icon>
    );
  },
});

export const IconMaleFemaleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMaleFemaleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MaleFemaleOutline />
      </Icon>
    );
  },
});

export const IconMaleFemaleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMaleFemaleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MaleFemaleSharp />
      </Icon>
    );
  },
});

export const IconMaleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMaleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MaleOutline />
      </Icon>
    );
  },
});

export const IconMaleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMaleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MaleSharp />
      </Icon>
    );
  },
});

export const IconMan = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMan',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Man />
      </Icon>
    );
  },
});

export const IconManOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconManOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ManOutline />
      </Icon>
    );
  },
});

export const IconManSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconManSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ManSharp />
      </Icon>
    );
  },
});

export const IconMap = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMap',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Map />
      </Icon>
    );
  },
});

export const IconMapOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMapOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MapOutline />
      </Icon>
    );
  },
});

export const IconMapSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMapSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MapSharp />
      </Icon>
    );
  },
});

export const IconMedal = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMedal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Medal />
      </Icon>
    );
  },
});

export const IconMedalOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMedalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MedalOutline />
      </Icon>
    );
  },
});

export const IconMedalSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMedalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MedalSharp />
      </Icon>
    );
  },
});

export const IconMedical = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMedical',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Medical />
      </Icon>
    );
  },
});

export const IconMedicalOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMedicalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MedicalOutline />
      </Icon>
    );
  },
});

export const IconMedicalSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMedicalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MedicalSharp />
      </Icon>
    );
  },
});

export const IconMedkit = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMedkit',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Medkit />
      </Icon>
    );
  },
});

export const IconMedkitOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMedkitOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MedkitOutline />
      </Icon>
    );
  },
});

export const IconMedkitSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMedkitSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MedkitSharp />
      </Icon>
    );
  },
});

export const IconMegaphone = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMegaphone',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Megaphone />
      </Icon>
    );
  },
});

export const IconMegaphoneOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMegaphoneOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MegaphoneOutline />
      </Icon>
    );
  },
});

export const IconMegaphoneSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMegaphoneSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MegaphoneSharp />
      </Icon>
    );
  },
});

export const IconMenu = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMenu',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Menu />
      </Icon>
    );
  },
});

export const IconMenuOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMenuOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MenuOutline />
      </Icon>
    );
  },
});

export const IconMenuSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMenuSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MenuSharp />
      </Icon>
    );
  },
});

export const IconMic = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMic',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Mic />
      </Icon>
    );
  },
});

export const IconMicCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicCircle />
      </Icon>
    );
  },
});

export const IconMicCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicCircleOutline />
      </Icon>
    );
  },
});

export const IconMicCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicCircleSharp />
      </Icon>
    );
  },
});

export const IconMicOff = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicOff />
      </Icon>
    );
  },
});

export const IconMicOffCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicOffCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicOffCircle />
      </Icon>
    );
  },
});

export const IconMicOffCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicOffCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicOffCircleOutline />
      </Icon>
    );
  },
});

export const IconMicOffCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicOffCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicOffCircleSharp />
      </Icon>
    );
  },
});

export const IconMicOffOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicOffOutline />
      </Icon>
    );
  },
});

export const IconMicOffSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicOffSharp />
      </Icon>
    );
  },
});

export const IconMicOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicOutline />
      </Icon>
    );
  },
});

export const IconMicSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMicSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MicSharp />
      </Icon>
    );
  },
});

export const IconMoon = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMoon',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Moon />
      </Icon>
    );
  },
});

export const IconMoonOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMoonOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MoonOutline />
      </Icon>
    );
  },
});

export const IconMoonSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMoonSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MoonSharp />
      </Icon>
    );
  },
});

export const IconMove = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMove',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Move />
      </Icon>
    );
  },
});

export const IconMoveOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMoveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MoveOutline />
      </Icon>
    );
  },
});

export const IconMoveSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMoveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MoveSharp />
      </Icon>
    );
  },
});

export const IconMusicalNote = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMusicalNote',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MusicalNote />
      </Icon>
    );
  },
});

export const IconMusicalNoteOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMusicalNoteOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MusicalNoteOutline />
      </Icon>
    );
  },
});

export const IconMusicalNoteSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMusicalNoteSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MusicalNoteSharp />
      </Icon>
    );
  },
});

export const IconMusicalNotes = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMusicalNotes',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MusicalNotes />
      </Icon>
    );
  },
});

export const IconMusicalNotesOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMusicalNotesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MusicalNotesOutline />
      </Icon>
    );
  },
});

export const IconMusicalNotesSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconMusicalNotesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <MusicalNotesSharp />
      </Icon>
    );
  },
});

export const IconNavigate = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNavigate',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Navigate />
      </Icon>
    );
  },
});

export const IconNavigateCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNavigateCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NavigateCircle />
      </Icon>
    );
  },
});

export const IconNavigateCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNavigateCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NavigateCircleOutline />
      </Icon>
    );
  },
});

export const IconNavigateCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNavigateCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NavigateCircleSharp />
      </Icon>
    );
  },
});

export const IconNavigateOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNavigateOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NavigateOutline />
      </Icon>
    );
  },
});

export const IconNavigateSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNavigateSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NavigateSharp />
      </Icon>
    );
  },
});

export const IconNewspaper = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNewspaper',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Newspaper />
      </Icon>
    );
  },
});

export const IconNewspaperOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNewspaperOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NewspaperOutline />
      </Icon>
    );
  },
});

export const IconNewspaperSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNewspaperSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NewspaperSharp />
      </Icon>
    );
  },
});

export const IconNotifications = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotifications',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Notifications />
      </Icon>
    );
  },
});

export const IconNotificationsCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotificationsCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NotificationsCircle />
      </Icon>
    );
  },
});

export const IconNotificationsCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotificationsCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NotificationsCircleOutline />
      </Icon>
    );
  },
});

export const IconNotificationsCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotificationsCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NotificationsCircleSharp />
      </Icon>
    );
  },
});

export const IconNotificationsOff = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotificationsOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NotificationsOff />
      </Icon>
    );
  },
});

export const IconNotificationsOffCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotificationsOffCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NotificationsOffCircle />
      </Icon>
    );
  },
});

export const IconNotificationsOffCircleOutline =
  /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
    name: 'IconNotificationsOffCircleOutline',
    props: iconProps as any,
    setup: (props) => {
      return () => (
        <Icon {...props}>
          <NotificationsOffCircleOutline />
        </Icon>
      );
    },
  });

export const IconNotificationsOffCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotificationsOffCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NotificationsOffCircleSharp />
      </Icon>
    );
  },
});

export const IconNotificationsOffOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotificationsOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NotificationsOffOutline />
      </Icon>
    );
  },
});

export const IconNotificationsOffSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotificationsOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NotificationsOffSharp />
      </Icon>
    );
  },
});

export const IconNotificationsOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotificationsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NotificationsOutline />
      </Icon>
    );
  },
});

export const IconNotificationsSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNotificationsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NotificationsSharp />
      </Icon>
    );
  },
});

export const IconNuclear = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNuclear',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Nuclear />
      </Icon>
    );
  },
});

export const IconNuclearOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNuclearOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NuclearOutline />
      </Icon>
    );
  },
});

export const IconNuclearSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNuclearSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NuclearSharp />
      </Icon>
    );
  },
});

export const IconNutrition = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNutrition',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Nutrition />
      </Icon>
    );
  },
});

export const IconNutritionOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNutritionOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NutritionOutline />
      </Icon>
    );
  },
});

export const IconNutritionSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconNutritionSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <NutritionSharp />
      </Icon>
    );
  },
});

export const IconOpen = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconOpen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Open />
      </Icon>
    );
  },
});

export const IconOpenOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconOpenOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <OpenOutline />
      </Icon>
    );
  },
});

export const IconOpenSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconOpenSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <OpenSharp />
      </Icon>
    );
  },
});

export const IconOptions = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconOptions',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Options />
      </Icon>
    );
  },
});

export const IconOptionsOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconOptionsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <OptionsOutline />
      </Icon>
    );
  },
});

export const IconOptionsSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconOptionsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <OptionsSharp />
      </Icon>
    );
  },
});

export const IconPaperPlane = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPaperPlane',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PaperPlane />
      </Icon>
    );
  },
});

export const IconPaperPlaneOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPaperPlaneOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PaperPlaneOutline />
      </Icon>
    );
  },
});

export const IconPaperPlaneSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPaperPlaneSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PaperPlaneSharp />
      </Icon>
    );
  },
});

export const IconPartlySunny = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPartlySunny',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PartlySunny />
      </Icon>
    );
  },
});

export const IconPartlySunnyOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPartlySunnyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PartlySunnyOutline />
      </Icon>
    );
  },
});

export const IconPartlySunnySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPartlySunnySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PartlySunnySharp />
      </Icon>
    );
  },
});

export const IconPause = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPause',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Pause />
      </Icon>
    );
  },
});

export const IconPauseCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPauseCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PauseCircle />
      </Icon>
    );
  },
});

export const IconPauseCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPauseCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PauseCircleOutline />
      </Icon>
    );
  },
});

export const IconPauseCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPauseCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PauseCircleSharp />
      </Icon>
    );
  },
});

export const IconPauseOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPauseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PauseOutline />
      </Icon>
    );
  },
});

export const IconPauseSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPauseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PauseSharp />
      </Icon>
    );
  },
});

export const IconPaw = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPaw',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Paw />
      </Icon>
    );
  },
});

export const IconPawOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPawOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PawOutline />
      </Icon>
    );
  },
});

export const IconPawSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPawSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PawSharp />
      </Icon>
    );
  },
});

export const IconPencil = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPencil',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Pencil />
      </Icon>
    );
  },
});

export const IconPencilOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPencilOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PencilOutline />
      </Icon>
    );
  },
});

export const IconPencilSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPencilSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PencilSharp />
      </Icon>
    );
  },
});

export const IconPeople = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPeople',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <People />
      </Icon>
    );
  },
});

export const IconPeopleCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPeopleCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PeopleCircle />
      </Icon>
    );
  },
});

export const IconPeopleCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPeopleCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PeopleCircleOutline />
      </Icon>
    );
  },
});

export const IconPeopleCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPeopleCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PeopleCircleSharp />
      </Icon>
    );
  },
});

export const IconPeopleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPeopleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PeopleOutline />
      </Icon>
    );
  },
});

export const IconPeopleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPeopleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PeopleSharp />
      </Icon>
    );
  },
});

export const IconPerson = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPerson',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Person />
      </Icon>
    );
  },
});

export const IconPersonAdd = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonAdd',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonAdd />
      </Icon>
    );
  },
});

export const IconPersonAddOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonAddOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonAddOutline />
      </Icon>
    );
  },
});

export const IconPersonAddSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonAddSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonAddSharp />
      </Icon>
    );
  },
});

export const IconPersonCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonCircle />
      </Icon>
    );
  },
});

export const IconPersonCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonCircleOutline />
      </Icon>
    );
  },
});

export const IconPersonCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonCircleSharp />
      </Icon>
    );
  },
});

export const IconPersonOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonOutline />
      </Icon>
    );
  },
});

export const IconPersonRemove = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonRemove',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonRemove />
      </Icon>
    );
  },
});

export const IconPersonRemoveOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonRemoveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonRemoveOutline />
      </Icon>
    );
  },
});

export const IconPersonRemoveSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonRemoveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonRemoveSharp />
      </Icon>
    );
  },
});

export const IconPersonSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPersonSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PersonSharp />
      </Icon>
    );
  },
});

export const IconPhoneLandscape = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPhoneLandscape',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PhoneLandscape />
      </Icon>
    );
  },
});

export const IconPhoneLandscapeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPhoneLandscapeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PhoneLandscapeOutline />
      </Icon>
    );
  },
});

export const IconPhoneLandscapeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPhoneLandscapeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PhoneLandscapeSharp />
      </Icon>
    );
  },
});

export const IconPhonePortrait = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPhonePortrait',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PhonePortrait />
      </Icon>
    );
  },
});

export const IconPhonePortraitOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPhonePortraitOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PhonePortraitOutline />
      </Icon>
    );
  },
});

export const IconPhonePortraitSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPhonePortraitSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PhonePortraitSharp />
      </Icon>
    );
  },
});

export const IconPieChart = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPieChart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PieChart />
      </Icon>
    );
  },
});

export const IconPieChartOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPieChartOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PieChartOutline />
      </Icon>
    );
  },
});

export const IconPieChartSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPieChartSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PieChartSharp />
      </Icon>
    );
  },
});

export const IconPin = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPin',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Pin />
      </Icon>
    );
  },
});

export const IconPinOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPinOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PinOutline />
      </Icon>
    );
  },
});

export const IconPinSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPinSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PinSharp />
      </Icon>
    );
  },
});

export const IconPint = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPint',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Pint />
      </Icon>
    );
  },
});

export const IconPintOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPintOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PintOutline />
      </Icon>
    );
  },
});

export const IconPintSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPintSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PintSharp />
      </Icon>
    );
  },
});

export const IconPizza = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPizza',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Pizza />
      </Icon>
    );
  },
});

export const IconPizzaOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPizzaOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PizzaOutline />
      </Icon>
    );
  },
});

export const IconPizzaSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPizzaSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PizzaSharp />
      </Icon>
    );
  },
});

export const IconPlanet = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlanet',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Planet />
      </Icon>
    );
  },
});

export const IconPlanetOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlanetOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlanetOutline />
      </Icon>
    );
  },
});

export const IconPlanetSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlanetSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlanetSharp />
      </Icon>
    );
  },
});

export const IconPlay = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlay',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Play />
      </Icon>
    );
  },
});

export const IconPlayBack = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayBack />
      </Icon>
    );
  },
});

export const IconPlayBackCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayBackCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayBackCircle />
      </Icon>
    );
  },
});

export const IconPlayBackCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayBackCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayBackCircleOutline />
      </Icon>
    );
  },
});

export const IconPlayBackCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayBackCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayBackCircleSharp />
      </Icon>
    );
  },
});

export const IconPlayBackOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayBackOutline />
      </Icon>
    );
  },
});

export const IconPlayBackSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayBackSharp />
      </Icon>
    );
  },
});

export const IconPlayCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayCircle />
      </Icon>
    );
  },
});

export const IconPlayCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayCircleOutline />
      </Icon>
    );
  },
});

export const IconPlayCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayCircleSharp />
      </Icon>
    );
  },
});

export const IconPlayForward = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayForward />
      </Icon>
    );
  },
});

export const IconPlayForwardCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayForwardCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayForwardCircle />
      </Icon>
    );
  },
});

export const IconPlayForwardCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayForwardCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayForwardCircleOutline />
      </Icon>
    );
  },
});

export const IconPlayForwardCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayForwardCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayForwardCircleSharp />
      </Icon>
    );
  },
});

export const IconPlayForwardOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayForwardOutline />
      </Icon>
    );
  },
});

export const IconPlayForwardSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayForwardSharp />
      </Icon>
    );
  },
});

export const IconPlayOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlayOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlayOutline />
      </Icon>
    );
  },
});

export const IconPlaySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySharp />
      </Icon>
    );
  },
});

export const IconPlaySkipBack = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipBack />
      </Icon>
    );
  },
});

export const IconPlaySkipBackCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipBackCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipBackCircle />
      </Icon>
    );
  },
});

export const IconPlaySkipBackCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipBackCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipBackCircleOutline />
      </Icon>
    );
  },
});

export const IconPlaySkipBackCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipBackCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipBackCircleSharp />
      </Icon>
    );
  },
});

export const IconPlaySkipBackOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipBackOutline />
      </Icon>
    );
  },
});

export const IconPlaySkipBackSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipBackSharp />
      </Icon>
    );
  },
});

export const IconPlaySkipForward = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipForward />
      </Icon>
    );
  },
});

export const IconPlaySkipForwardCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipForwardCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipForwardCircle />
      </Icon>
    );
  },
});

export const IconPlaySkipForwardCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipForwardCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipForwardCircleOutline />
      </Icon>
    );
  },
});

export const IconPlaySkipForwardCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipForwardCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipForwardCircleSharp />
      </Icon>
    );
  },
});

export const IconPlaySkipForwardOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipForwardOutline />
      </Icon>
    );
  },
});

export const IconPlaySkipForwardSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPlaySkipForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PlaySkipForwardSharp />
      </Icon>
    );
  },
});

export const IconPodium = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPodium',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Podium />
      </Icon>
    );
  },
});

export const IconPodiumOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPodiumOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PodiumOutline />
      </Icon>
    );
  },
});

export const IconPodiumSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPodiumSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PodiumSharp />
      </Icon>
    );
  },
});

export const IconPower = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPower',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Power />
      </Icon>
    );
  },
});

export const IconPowerOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPowerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PowerOutline />
      </Icon>
    );
  },
});

export const IconPowerSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPowerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PowerSharp />
      </Icon>
    );
  },
});

export const IconPricetag = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPricetag',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Pricetag />
      </Icon>
    );
  },
});

export const IconPricetagOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPricetagOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PricetagOutline />
      </Icon>
    );
  },
});

export const IconPricetagSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPricetagSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PricetagSharp />
      </Icon>
    );
  },
});

export const IconPricetags = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPricetags',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Pricetags />
      </Icon>
    );
  },
});

export const IconPricetagsOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPricetagsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PricetagsOutline />
      </Icon>
    );
  },
});

export const IconPricetagsSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPricetagsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PricetagsSharp />
      </Icon>
    );
  },
});

export const IconPrint = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPrint',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Print />
      </Icon>
    );
  },
});

export const IconPrintOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPrintOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PrintOutline />
      </Icon>
    );
  },
});

export const IconPrintSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPrintSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PrintSharp />
      </Icon>
    );
  },
});

export const IconPrism = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPrism',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Prism />
      </Icon>
    );
  },
});

export const IconPrismOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPrismOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PrismOutline />
      </Icon>
    );
  },
});

export const IconPrismSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPrismSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PrismSharp />
      </Icon>
    );
  },
});

export const IconPulse = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPulse',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Pulse />
      </Icon>
    );
  },
});

export const IconPulseOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPulseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PulseOutline />
      </Icon>
    );
  },
});

export const IconPulseSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPulseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PulseSharp />
      </Icon>
    );
  },
});

export const IconPush = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPush',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Push />
      </Icon>
    );
  },
});

export const IconPushOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPushOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PushOutline />
      </Icon>
    );
  },
});

export const IconPushSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconPushSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <PushSharp />
      </Icon>
    );
  },
});

export const IconQrCode = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconQrCode',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <QrCode />
      </Icon>
    );
  },
});

export const IconQrCodeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconQrCodeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <QrCodeOutline />
      </Icon>
    );
  },
});

export const IconQrCodeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconQrCodeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <QrCodeSharp />
      </Icon>
    );
  },
});

export const IconRadio = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRadio',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Radio />
      </Icon>
    );
  },
});

export const IconRadioButtonOff = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRadioButtonOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RadioButtonOff />
      </Icon>
    );
  },
});

export const IconRadioButtonOffOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRadioButtonOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RadioButtonOffOutline />
      </Icon>
    );
  },
});

export const IconRadioButtonOffSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRadioButtonOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RadioButtonOffSharp />
      </Icon>
    );
  },
});

export const IconRadioButtonOn = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRadioButtonOn',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RadioButtonOn />
      </Icon>
    );
  },
});

export const IconRadioButtonOnOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRadioButtonOnOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RadioButtonOnOutline />
      </Icon>
    );
  },
});

export const IconRadioButtonOnSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRadioButtonOnSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RadioButtonOnSharp />
      </Icon>
    );
  },
});

export const IconRadioOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRadioOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RadioOutline />
      </Icon>
    );
  },
});

export const IconRadioSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRadioSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RadioSharp />
      </Icon>
    );
  },
});

export const IconRainy = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRainy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Rainy />
      </Icon>
    );
  },
});

export const IconRainyOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRainyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RainyOutline />
      </Icon>
    );
  },
});

export const IconRainySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRainySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RainySharp />
      </Icon>
    );
  },
});

export const IconReader = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReader',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Reader />
      </Icon>
    );
  },
});

export const IconReaderOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReaderOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReaderOutline />
      </Icon>
    );
  },
});

export const IconReaderSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReaderSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReaderSharp />
      </Icon>
    );
  },
});

export const IconReceipt = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReceipt',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Receipt />
      </Icon>
    );
  },
});

export const IconReceiptOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReceiptOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReceiptOutline />
      </Icon>
    );
  },
});

export const IconReceiptSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReceiptSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReceiptSharp />
      </Icon>
    );
  },
});

export const IconRecording = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRecording',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Recording />
      </Icon>
    );
  },
});

export const IconRecordingOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRecordingOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RecordingOutline />
      </Icon>
    );
  },
});

export const IconRecordingSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRecordingSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RecordingSharp />
      </Icon>
    );
  },
});

export const IconRefresh = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRefresh',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Refresh />
      </Icon>
    );
  },
});

export const IconRefreshCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRefreshCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RefreshCircle />
      </Icon>
    );
  },
});

export const IconRefreshCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRefreshCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RefreshCircleOutline />
      </Icon>
    );
  },
});

export const IconRefreshCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRefreshCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RefreshCircleSharp />
      </Icon>
    );
  },
});

export const IconRefreshOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRefreshOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RefreshOutline />
      </Icon>
    );
  },
});

export const IconRefreshSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRefreshSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RefreshSharp />
      </Icon>
    );
  },
});

export const IconReload = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReload',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Reload />
      </Icon>
    );
  },
});

export const IconReloadCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReloadCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReloadCircle />
      </Icon>
    );
  },
});

export const IconReloadCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReloadCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReloadCircleOutline />
      </Icon>
    );
  },
});

export const IconReloadCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReloadCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReloadCircleSharp />
      </Icon>
    );
  },
});

export const IconReloadOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReloadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReloadOutline />
      </Icon>
    );
  },
});

export const IconReloadSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReloadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReloadSharp />
      </Icon>
    );
  },
});

export const IconRemove = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRemove',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Remove />
      </Icon>
    );
  },
});

export const IconRemoveCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRemoveCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RemoveCircle />
      </Icon>
    );
  },
});

export const IconRemoveCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRemoveCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RemoveCircleOutline />
      </Icon>
    );
  },
});

export const IconRemoveCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRemoveCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RemoveCircleSharp />
      </Icon>
    );
  },
});

export const IconRemoveOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRemoveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RemoveOutline />
      </Icon>
    );
  },
});

export const IconRemoveSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRemoveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RemoveSharp />
      </Icon>
    );
  },
});

export const IconReorderFour = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReorderFour',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReorderFour />
      </Icon>
    );
  },
});

export const IconReorderFourOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReorderFourOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReorderFourOutline />
      </Icon>
    );
  },
});

export const IconReorderFourSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReorderFourSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReorderFourSharp />
      </Icon>
    );
  },
});

export const IconReorderThree = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReorderThree',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReorderThree />
      </Icon>
    );
  },
});

export const IconReorderThreeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReorderThreeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReorderThreeOutline />
      </Icon>
    );
  },
});

export const IconReorderThreeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReorderThreeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReorderThreeSharp />
      </Icon>
    );
  },
});

export const IconReorderTwo = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReorderTwo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReorderTwo />
      </Icon>
    );
  },
});

export const IconReorderTwoOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReorderTwoOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReorderTwoOutline />
      </Icon>
    );
  },
});

export const IconReorderTwoSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReorderTwoSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReorderTwoSharp />
      </Icon>
    );
  },
});

export const IconRepeat = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRepeat',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Repeat />
      </Icon>
    );
  },
});

export const IconRepeatOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRepeatOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RepeatOutline />
      </Icon>
    );
  },
});

export const IconRepeatSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRepeatSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RepeatSharp />
      </Icon>
    );
  },
});

export const IconResize = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconResize',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Resize />
      </Icon>
    );
  },
});

export const IconResizeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconResizeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ResizeOutline />
      </Icon>
    );
  },
});

export const IconResizeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconResizeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ResizeSharp />
      </Icon>
    );
  },
});

export const IconRestaurant = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRestaurant',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Restaurant />
      </Icon>
    );
  },
});

export const IconRestaurantOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRestaurantOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RestaurantOutline />
      </Icon>
    );
  },
});

export const IconRestaurantSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRestaurantSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RestaurantSharp />
      </Icon>
    );
  },
});

export const IconReturnDownBack = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnDownBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnDownBack />
      </Icon>
    );
  },
});

export const IconReturnDownBackOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnDownBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnDownBackOutline />
      </Icon>
    );
  },
});

export const IconReturnDownBackSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnDownBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnDownBackSharp />
      </Icon>
    );
  },
});

export const IconReturnDownForward = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnDownForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnDownForward />
      </Icon>
    );
  },
});

export const IconReturnDownForwardOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnDownForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnDownForwardOutline />
      </Icon>
    );
  },
});

export const IconReturnDownForwardSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnDownForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnDownForwardSharp />
      </Icon>
    );
  },
});

export const IconReturnUpBack = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnUpBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnUpBack />
      </Icon>
    );
  },
});

export const IconReturnUpBackOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnUpBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnUpBackOutline />
      </Icon>
    );
  },
});

export const IconReturnUpBackSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnUpBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnUpBackSharp />
      </Icon>
    );
  },
});

export const IconReturnUpForward = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnUpForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnUpForward />
      </Icon>
    );
  },
});

export const IconReturnUpForwardOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnUpForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnUpForwardOutline />
      </Icon>
    );
  },
});

export const IconReturnUpForwardSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconReturnUpForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ReturnUpForwardSharp />
      </Icon>
    );
  },
});

export const IconRibbon = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRibbon',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Ribbon />
      </Icon>
    );
  },
});

export const IconRibbonOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRibbonOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RibbonOutline />
      </Icon>
    );
  },
});

export const IconRibbonSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRibbonSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RibbonSharp />
      </Icon>
    );
  },
});

export const IconRocket = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRocket',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Rocket />
      </Icon>
    );
  },
});

export const IconRocketOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRocketOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RocketOutline />
      </Icon>
    );
  },
});

export const IconRocketSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRocketSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RocketSharp />
      </Icon>
    );
  },
});

export const IconRose = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRose',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Rose />
      </Icon>
    );
  },
});

export const IconRoseOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRoseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RoseOutline />
      </Icon>
    );
  },
});

export const IconRoseSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconRoseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <RoseSharp />
      </Icon>
    );
  },
});

export const IconSad = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSad',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Sad />
      </Icon>
    );
  },
});

export const IconSadOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SadOutline />
      </Icon>
    );
  },
});

export const IconSadSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SadSharp />
      </Icon>
    );
  },
});

export const IconSave = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSave',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Save />
      </Icon>
    );
  },
});

export const IconSaveOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSaveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SaveOutline />
      </Icon>
    );
  },
});

export const IconSaveSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSaveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SaveSharp />
      </Icon>
    );
  },
});

export const IconScale = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconScale',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Scale />
      </Icon>
    );
  },
});

export const IconScaleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconScaleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ScaleOutline />
      </Icon>
    );
  },
});

export const IconScaleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconScaleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ScaleSharp />
      </Icon>
    );
  },
});

export const IconScan = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconScan',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Scan />
      </Icon>
    );
  },
});

export const IconScanCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconScanCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ScanCircle />
      </Icon>
    );
  },
});

export const IconScanCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconScanCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ScanCircleOutline />
      </Icon>
    );
  },
});

export const IconScanCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconScanCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ScanCircleSharp />
      </Icon>
    );
  },
});

export const IconScanOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconScanOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ScanOutline />
      </Icon>
    );
  },
});

export const IconScanSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconScanSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ScanSharp />
      </Icon>
    );
  },
});

export const IconSchool = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSchool',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <School />
      </Icon>
    );
  },
});

export const IconSchoolOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSchoolOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SchoolOutline />
      </Icon>
    );
  },
});

export const IconSchoolSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSchoolSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SchoolSharp />
      </Icon>
    );
  },
});

export const IconSearch = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSearch',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Search />
      </Icon>
    );
  },
});

export const IconSearchCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSearchCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SearchCircle />
      </Icon>
    );
  },
});

export const IconSearchCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSearchCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SearchCircleOutline />
      </Icon>
    );
  },
});

export const IconSearchCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSearchCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SearchCircleSharp />
      </Icon>
    );
  },
});

export const IconSearchOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSearchOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SearchOutline />
      </Icon>
    );
  },
});

export const IconSearchSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSearchSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SearchSharp />
      </Icon>
    );
  },
});

export const IconSend = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSend',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Send />
      </Icon>
    );
  },
});

export const IconSendOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSendOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SendOutline />
      </Icon>
    );
  },
});

export const IconSendSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSendSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SendSharp />
      </Icon>
    );
  },
});

export const IconServer = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconServer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Server />
      </Icon>
    );
  },
});

export const IconServerOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconServerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ServerOutline />
      </Icon>
    );
  },
});

export const IconServerSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconServerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ServerSharp />
      </Icon>
    );
  },
});

export const IconSettings = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSettings',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Settings />
      </Icon>
    );
  },
});

export const IconSettingsOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSettingsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SettingsOutline />
      </Icon>
    );
  },
});

export const IconSettingsSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSettingsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SettingsSharp />
      </Icon>
    );
  },
});

export const IconShapes = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShapes',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Shapes />
      </Icon>
    );
  },
});

export const IconShapesOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShapesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShapesOutline />
      </Icon>
    );
  },
});

export const IconShapesSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShapesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShapesSharp />
      </Icon>
    );
  },
});

export const IconShare = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShare',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Share />
      </Icon>
    );
  },
});

export const IconShareOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShareOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShareOutline />
      </Icon>
    );
  },
});

export const IconShareSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShareSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShareSharp />
      </Icon>
    );
  },
});

export const IconShareSocial = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShareSocial',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShareSocial />
      </Icon>
    );
  },
});

export const IconShareSocialOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShareSocialOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShareSocialOutline />
      </Icon>
    );
  },
});

export const IconShareSocialSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShareSocialSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShareSocialSharp />
      </Icon>
    );
  },
});

export const IconShield = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShield',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Shield />
      </Icon>
    );
  },
});

export const IconShieldCheckmark = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShieldCheckmark',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShieldCheckmark />
      </Icon>
    );
  },
});

export const IconShieldCheckmarkOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShieldCheckmarkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShieldCheckmarkOutline />
      </Icon>
    );
  },
});

export const IconShieldCheckmarkSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShieldCheckmarkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShieldCheckmarkSharp />
      </Icon>
    );
  },
});

export const IconShieldHalf = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShieldHalf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShieldHalf />
      </Icon>
    );
  },
});

export const IconShieldHalfOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShieldHalfOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShieldHalfOutline />
      </Icon>
    );
  },
});

export const IconShieldHalfSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShieldHalfSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShieldHalfSharp />
      </Icon>
    );
  },
});

export const IconShieldOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShieldOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShieldOutline />
      </Icon>
    );
  },
});

export const IconShieldSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShieldSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShieldSharp />
      </Icon>
    );
  },
});

export const IconShirt = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShirt',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Shirt />
      </Icon>
    );
  },
});

export const IconShirtOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShirtOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShirtOutline />
      </Icon>
    );
  },
});

export const IconShirtSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShirtSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShirtSharp />
      </Icon>
    );
  },
});

export const IconShuffle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShuffle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Shuffle />
      </Icon>
    );
  },
});

export const IconShuffleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShuffleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShuffleOutline />
      </Icon>
    );
  },
});

export const IconShuffleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconShuffleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ShuffleSharp />
      </Icon>
    );
  },
});

export const IconSkull = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSkull',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Skull />
      </Icon>
    );
  },
});

export const IconSkullOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSkullOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SkullOutline />
      </Icon>
    );
  },
});

export const IconSkullSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSkullSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SkullSharp />
      </Icon>
    );
  },
});

export const IconSnow = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSnow',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Snow />
      </Icon>
    );
  },
});

export const IconSnowOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSnowOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SnowOutline />
      </Icon>
    );
  },
});

export const IconSnowSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSnowSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SnowSharp />
      </Icon>
    );
  },
});

export const IconSparkles = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSparkles',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Sparkles />
      </Icon>
    );
  },
});

export const IconSparklesOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSparklesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SparklesOutline />
      </Icon>
    );
  },
});

export const IconSparklesSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSparklesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SparklesSharp />
      </Icon>
    );
  },
});

export const IconSpeedometer = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSpeedometer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Speedometer />
      </Icon>
    );
  },
});

export const IconSpeedometerOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSpeedometerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SpeedometerOutline />
      </Icon>
    );
  },
});

export const IconSpeedometerSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSpeedometerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SpeedometerSharp />
      </Icon>
    );
  },
});

export const IconSquare = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSquare',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Square />
      </Icon>
    );
  },
});

export const IconSquareOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSquareOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SquareOutline />
      </Icon>
    );
  },
});

export const IconSquareSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSquareSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SquareSharp />
      </Icon>
    );
  },
});

export const IconStar = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStar',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Star />
      </Icon>
    );
  },
});

export const IconStarHalf = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStarHalf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StarHalf />
      </Icon>
    );
  },
});

export const IconStarHalfOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStarHalfOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StarHalfOutline />
      </Icon>
    );
  },
});

export const IconStarHalfSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStarHalfSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StarHalfSharp />
      </Icon>
    );
  },
});

export const IconStarOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStarOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StarOutline />
      </Icon>
    );
  },
});

export const IconStarSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStarSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StarSharp />
      </Icon>
    );
  },
});

export const IconStatsChart = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStatsChart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StatsChart />
      </Icon>
    );
  },
});

export const IconStatsChartOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStatsChartOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StatsChartOutline />
      </Icon>
    );
  },
});

export const IconStatsChartSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStatsChartSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StatsChartSharp />
      </Icon>
    );
  },
});

export const IconStop = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStop',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Stop />
      </Icon>
    );
  },
});

export const IconStopCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStopCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StopCircle />
      </Icon>
    );
  },
});

export const IconStopCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStopCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StopCircleOutline />
      </Icon>
    );
  },
});

export const IconStopCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStopCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StopCircleSharp />
      </Icon>
    );
  },
});

export const IconStopOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStopOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StopOutline />
      </Icon>
    );
  },
});

export const IconStopSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStopSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StopSharp />
      </Icon>
    );
  },
});

export const IconStopwatch = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStopwatch',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Stopwatch />
      </Icon>
    );
  },
});

export const IconStopwatchOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStopwatchOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StopwatchOutline />
      </Icon>
    );
  },
});

export const IconStopwatchSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStopwatchSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StopwatchSharp />
      </Icon>
    );
  },
});

export const IconStorefront = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStorefront',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Storefront />
      </Icon>
    );
  },
});

export const IconStorefrontOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStorefrontOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StorefrontOutline />
      </Icon>
    );
  },
});

export const IconStorefrontSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconStorefrontSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <StorefrontSharp />
      </Icon>
    );
  },
});

export const IconSubway = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSubway',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Subway />
      </Icon>
    );
  },
});

export const IconSubwayOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSubwayOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SubwayOutline />
      </Icon>
    );
  },
});

export const IconSubwaySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSubwaySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SubwaySharp />
      </Icon>
    );
  },
});

export const IconSunny = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSunny',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Sunny />
      </Icon>
    );
  },
});

export const IconSunnyOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSunnyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SunnyOutline />
      </Icon>
    );
  },
});

export const IconSunnySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSunnySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SunnySharp />
      </Icon>
    );
  },
});

export const IconSwapHorizontal = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSwapHorizontal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SwapHorizontal />
      </Icon>
    );
  },
});

export const IconSwapHorizontalOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSwapHorizontalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SwapHorizontalOutline />
      </Icon>
    );
  },
});

export const IconSwapHorizontalSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSwapHorizontalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SwapHorizontalSharp />
      </Icon>
    );
  },
});

export const IconSwapVertical = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSwapVertical',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SwapVertical />
      </Icon>
    );
  },
});

export const IconSwapVerticalOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSwapVerticalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SwapVerticalOutline />
      </Icon>
    );
  },
});

export const IconSwapVerticalSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSwapVerticalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SwapVerticalSharp />
      </Icon>
    );
  },
});

export const IconSync = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSync',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Sync />
      </Icon>
    );
  },
});

export const IconSyncCircle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSyncCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SyncCircle />
      </Icon>
    );
  },
});

export const IconSyncCircleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSyncCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SyncCircleOutline />
      </Icon>
    );
  },
});

export const IconSyncCircleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSyncCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SyncCircleSharp />
      </Icon>
    );
  },
});

export const IconSyncOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSyncOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SyncOutline />
      </Icon>
    );
  },
});

export const IconSyncSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconSyncSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <SyncSharp />
      </Icon>
    );
  },
});

export const IconTabletLandscape = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTabletLandscape',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TabletLandscape />
      </Icon>
    );
  },
});

export const IconTabletLandscapeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTabletLandscapeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TabletLandscapeOutline />
      </Icon>
    );
  },
});

export const IconTabletLandscapeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTabletLandscapeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TabletLandscapeSharp />
      </Icon>
    );
  },
});

export const IconTabletPortrait = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTabletPortrait',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TabletPortrait />
      </Icon>
    );
  },
});

export const IconTabletPortraitOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTabletPortraitOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TabletPortraitOutline />
      </Icon>
    );
  },
});

export const IconTabletPortraitSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTabletPortraitSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TabletPortraitSharp />
      </Icon>
    );
  },
});

export const IconTelescope = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTelescope',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Telescope />
      </Icon>
    );
  },
});

export const IconTelescopeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTelescopeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TelescopeOutline />
      </Icon>
    );
  },
});

export const IconTelescopeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTelescopeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TelescopeSharp />
      </Icon>
    );
  },
});

export const IconTennisball = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTennisball',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Tennisball />
      </Icon>
    );
  },
});

export const IconTennisballOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTennisballOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TennisballOutline />
      </Icon>
    );
  },
});

export const IconTennisballSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTennisballSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TennisballSharp />
      </Icon>
    );
  },
});

export const IconTerminal = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTerminal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Terminal />
      </Icon>
    );
  },
});

export const IconTerminalOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTerminalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TerminalOutline />
      </Icon>
    );
  },
});

export const IconTerminalSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTerminalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TerminalSharp />
      </Icon>
    );
  },
});

export const IconText = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconText',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Text />
      </Icon>
    );
  },
});

export const IconTextOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTextOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TextOutline />
      </Icon>
    );
  },
});

export const IconTextSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTextSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TextSharp />
      </Icon>
    );
  },
});

export const IconThermometer = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThermometer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Thermometer />
      </Icon>
    );
  },
});

export const IconThermometerOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThermometerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ThermometerOutline />
      </Icon>
    );
  },
});

export const IconThermometerSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThermometerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ThermometerSharp />
      </Icon>
    );
  },
});

export const IconThumbsDown = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThumbsDown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ThumbsDown />
      </Icon>
    );
  },
});

export const IconThumbsDownOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThumbsDownOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ThumbsDownOutline />
      </Icon>
    );
  },
});

export const IconThumbsDownSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThumbsDownSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ThumbsDownSharp />
      </Icon>
    );
  },
});

export const IconThumbsUp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThumbsUp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ThumbsUp />
      </Icon>
    );
  },
});

export const IconThumbsUpOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThumbsUpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ThumbsUpOutline />
      </Icon>
    );
  },
});

export const IconThumbsUpSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThumbsUpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ThumbsUpSharp />
      </Icon>
    );
  },
});

export const IconThunderstorm = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThunderstorm',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Thunderstorm />
      </Icon>
    );
  },
});

export const IconThunderstormOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThunderstormOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ThunderstormOutline />
      </Icon>
    );
  },
});

export const IconThunderstormSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconThunderstormSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ThunderstormSharp />
      </Icon>
    );
  },
});

export const IconTicket = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTicket',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Ticket />
      </Icon>
    );
  },
});

export const IconTicketOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTicketOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TicketOutline />
      </Icon>
    );
  },
});

export const IconTicketSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTicketSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TicketSharp />
      </Icon>
    );
  },
});

export const IconTime = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTime',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Time />
      </Icon>
    );
  },
});

export const IconTimeOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTimeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TimeOutline />
      </Icon>
    );
  },
});

export const IconTimeSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTimeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TimeSharp />
      </Icon>
    );
  },
});

export const IconTimer = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTimer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Timer />
      </Icon>
    );
  },
});

export const IconTimerOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTimerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TimerOutline />
      </Icon>
    );
  },
});

export const IconTimerSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTimerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TimerSharp />
      </Icon>
    );
  },
});

export const IconToday = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconToday',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Today />
      </Icon>
    );
  },
});

export const IconTodayOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTodayOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TodayOutline />
      </Icon>
    );
  },
});

export const IconTodaySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTodaySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TodaySharp />
      </Icon>
    );
  },
});

export const IconToggle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconToggle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Toggle />
      </Icon>
    );
  },
});

export const IconToggleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconToggleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ToggleOutline />
      </Icon>
    );
  },
});

export const IconToggleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconToggleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <ToggleSharp />
      </Icon>
    );
  },
});

export const IconTrailSign = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrailSign',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrailSign />
      </Icon>
    );
  },
});

export const IconTrailSignOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrailSignOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrailSignOutline />
      </Icon>
    );
  },
});

export const IconTrailSignSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrailSignSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrailSignSharp />
      </Icon>
    );
  },
});

export const IconTrain = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrain',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Train />
      </Icon>
    );
  },
});

export const IconTrainOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrainOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrainOutline />
      </Icon>
    );
  },
});

export const IconTrainSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrainSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrainSharp />
      </Icon>
    );
  },
});

export const IconTransgender = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTransgender',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Transgender />
      </Icon>
    );
  },
});

export const IconTransgenderOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTransgenderOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TransgenderOutline />
      </Icon>
    );
  },
});

export const IconTransgenderSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTransgenderSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TransgenderSharp />
      </Icon>
    );
  },
});

export const IconTrash = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrash',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Trash />
      </Icon>
    );
  },
});

export const IconTrashBin = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrashBin',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrashBin />
      </Icon>
    );
  },
});

export const IconTrashBinOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrashBinOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrashBinOutline />
      </Icon>
    );
  },
});

export const IconTrashBinSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrashBinSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrashBinSharp />
      </Icon>
    );
  },
});

export const IconTrashOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrashOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrashOutline />
      </Icon>
    );
  },
});

export const IconTrashSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrashSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrashSharp />
      </Icon>
    );
  },
});

export const IconTrendingDown = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrendingDown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrendingDown />
      </Icon>
    );
  },
});

export const IconTrendingDownOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrendingDownOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrendingDownOutline />
      </Icon>
    );
  },
});

export const IconTrendingDownSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrendingDownSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrendingDownSharp />
      </Icon>
    );
  },
});

export const IconTrendingUp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrendingUp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrendingUp />
      </Icon>
    );
  },
});

export const IconTrendingUpOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrendingUpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrendingUpOutline />
      </Icon>
    );
  },
});

export const IconTrendingUpSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrendingUpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrendingUpSharp />
      </Icon>
    );
  },
});

export const IconTriangle = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTriangle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Triangle />
      </Icon>
    );
  },
});

export const IconTriangleOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTriangleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TriangleOutline />
      </Icon>
    );
  },
});

export const IconTriangleSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTriangleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TriangleSharp />
      </Icon>
    );
  },
});

export const IconTrophy = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrophy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Trophy />
      </Icon>
    );
  },
});

export const IconTrophyOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrophyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrophyOutline />
      </Icon>
    );
  },
});

export const IconTrophySharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTrophySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TrophySharp />
      </Icon>
    );
  },
});

export const IconTv = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTv',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Tv />
      </Icon>
    );
  },
});

export const IconTvOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTvOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TvOutline />
      </Icon>
    );
  },
});

export const IconTvSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconTvSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <TvSharp />
      </Icon>
    );
  },
});

export const IconUmbrella = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconUmbrella',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Umbrella />
      </Icon>
    );
  },
});

export const IconUmbrellaOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconUmbrellaOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <UmbrellaOutline />
      </Icon>
    );
  },
});

export const IconUmbrellaSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconUmbrellaSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <UmbrellaSharp />
      </Icon>
    );
  },
});

export const IconUnlink = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconUnlink',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Unlink />
      </Icon>
    );
  },
});

export const IconUnlinkOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconUnlinkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <UnlinkOutline />
      </Icon>
    );
  },
});

export const IconUnlinkSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconUnlinkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <UnlinkSharp />
      </Icon>
    );
  },
});

export const IconVideocam = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVideocam',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Videocam />
      </Icon>
    );
  },
});

export const IconVideocamOff = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVideocamOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VideocamOff />
      </Icon>
    );
  },
});

export const IconVideocamOffOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVideocamOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VideocamOffOutline />
      </Icon>
    );
  },
});

export const IconVideocamOffSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVideocamOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VideocamOffSharp />
      </Icon>
    );
  },
});

export const IconVideocamOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVideocamOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VideocamOutline />
      </Icon>
    );
  },
});

export const IconVideocamSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVideocamSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VideocamSharp />
      </Icon>
    );
  },
});

export const IconVolumeHigh = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeHigh',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeHigh />
      </Icon>
    );
  },
});

export const IconVolumeHighOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeHighOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeHighOutline />
      </Icon>
    );
  },
});

export const IconVolumeHighSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeHighSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeHighSharp />
      </Icon>
    );
  },
});

export const IconVolumeLow = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeLow',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeLow />
      </Icon>
    );
  },
});

export const IconVolumeLowOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeLowOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeLowOutline />
      </Icon>
    );
  },
});

export const IconVolumeLowSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeLowSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeLowSharp />
      </Icon>
    );
  },
});

export const IconVolumeMedium = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeMedium',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeMedium />
      </Icon>
    );
  },
});

export const IconVolumeMediumOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeMediumOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeMediumOutline />
      </Icon>
    );
  },
});

export const IconVolumeMediumSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeMediumSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeMediumSharp />
      </Icon>
    );
  },
});

export const IconVolumeMute = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeMute',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeMute />
      </Icon>
    );
  },
});

export const IconVolumeMuteOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeMuteOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeMuteOutline />
      </Icon>
    );
  },
});

export const IconVolumeMuteSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeMuteSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeMuteSharp />
      </Icon>
    );
  },
});

export const IconVolumeOff = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeOff />
      </Icon>
    );
  },
});

export const IconVolumeOffOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeOffOutline />
      </Icon>
    );
  },
});

export const IconVolumeOffSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconVolumeOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <VolumeOffSharp />
      </Icon>
    );
  },
});

export const IconWalk = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWalk',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Walk />
      </Icon>
    );
  },
});

export const IconWalkOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWalkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WalkOutline />
      </Icon>
    );
  },
});

export const IconWalkSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWalkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WalkSharp />
      </Icon>
    );
  },
});

export const IconWallet = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWallet',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Wallet />
      </Icon>
    );
  },
});

export const IconWalletOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWalletOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WalletOutline />
      </Icon>
    );
  },
});

export const IconWalletSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWalletSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WalletSharp />
      </Icon>
    );
  },
});

export const IconWarning = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWarning',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Warning />
      </Icon>
    );
  },
});

export const IconWarningOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWarningOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WarningOutline />
      </Icon>
    );
  },
});

export const IconWarningSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWarningSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WarningSharp />
      </Icon>
    );
  },
});

export const IconWatch = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWatch',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Watch />
      </Icon>
    );
  },
});

export const IconWatchOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWatchOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WatchOutline />
      </Icon>
    );
  },
});

export const IconWatchSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWatchSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WatchSharp />
      </Icon>
    );
  },
});

export const IconWater = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWater',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Water />
      </Icon>
    );
  },
});

export const IconWaterOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWaterOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WaterOutline />
      </Icon>
    );
  },
});

export const IconWaterSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWaterSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WaterSharp />
      </Icon>
    );
  },
});

export const IconWifi = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWifi',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Wifi />
      </Icon>
    );
  },
});

export const IconWifiOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWifiOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WifiOutline />
      </Icon>
    );
  },
});

export const IconWifiSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWifiSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WifiSharp />
      </Icon>
    );
  },
});

export const IconWine = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWine',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Wine />
      </Icon>
    );
  },
});

export const IconWineOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWineOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WineOutline />
      </Icon>
    );
  },
});

export const IconWineSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWineSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WineSharp />
      </Icon>
    );
  },
});

export const IconWoman = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWoman',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <Woman />
      </Icon>
    );
  },
});

export const IconWomanOutline = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWomanOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WomanOutline />
      </Icon>
    );
  },
});

export const IconWomanSharp = /* @__PURE__ */ defineComponent<
  IIconProps & HTMLAttributes
>({
  name: 'IconWomanSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}>
        <WomanSharp />
      </Icon>
    );
  },
});
