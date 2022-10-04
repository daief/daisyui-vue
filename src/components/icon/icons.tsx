import { defineComponent, HTMLAttributes } from 'vue';
import { Icon, iconProps, IIconProps, IconComponent } from './icon';
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
  WomanSharp} from '@vicons/ionicons5'

export const IconAccessibility = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAccessibility',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Accessibility /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAccessibilityOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAccessibilityOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AccessibilityOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAccessibilitySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAccessibilitySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AccessibilitySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAdd = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAdd',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Add /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAddCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAddCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AddCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAddCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAddCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AddCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAddCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAddCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AddCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAddOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAddOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AddOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAddSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAddSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AddSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAirplane = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAirplane',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Airplane /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAirplaneOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAirplaneOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AirplaneOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAirplaneSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAirplaneSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AirplaneSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlarm = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlarm',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Alarm /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlarmOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlarmOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AlarmOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlarmSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlarmSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AlarmSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlbums = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlbums',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Albums /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlbumsOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlbumsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AlbumsOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlbumsSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlbumsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AlbumsSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlert = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlert',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Alert /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlertCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlertCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AlertCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlertCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlertCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AlertCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlertCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlertCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AlertCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlertOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlertOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AlertOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAlertSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAlertSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AlertSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAmericanFootball = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAmericanFootball',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AmericanFootball /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAmericanFootballOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAmericanFootballOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AmericanFootballOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAmericanFootballSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAmericanFootballSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AmericanFootballSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAnalytics = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAnalytics',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Analytics /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAnalyticsOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAnalyticsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AnalyticsOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAnalyticsSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAnalyticsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AnalyticsSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAperture = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAperture',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Aperture /></Icon>
    );
  },
}) as any as IconComponent;


export const IconApertureOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconApertureOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ApertureOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconApertureSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconApertureSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ApertureSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconApps = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconApps',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Apps /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAppsOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAppsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AppsOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAppsSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAppsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AppsSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArchive = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArchive',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Archive /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArchiveOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArchiveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArchiveOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArchiveSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArchiveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArchiveSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowBack = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowBack /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowBackCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowBackCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowBackCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowBackCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowBackCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowBackCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowBackCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowBackCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowBackCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowBackOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowBackOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowBackSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowBackSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowDown = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowDown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowDown /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowDownCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowDownCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowDownCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowDownCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowDownCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowDownCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowDownCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowDownCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowDownCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowDownOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowDownOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowDownOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowDownSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowDownSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowDownSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowForward = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowForward /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowForwardCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowForwardCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowForwardCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowForwardCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowForwardCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowForwardCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowForwardCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowForwardCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowForwardCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowForwardOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowForwardOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowForwardSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowForwardSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowRedo = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowRedo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowRedo /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowRedoCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowRedoCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowRedoCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowRedoCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowRedoCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowRedoCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowRedoCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowRedoCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowRedoCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowRedoOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowRedoOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowRedoOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowRedoSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowRedoSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowRedoSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUndo = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUndo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUndo /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUndoCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUndoCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUndoCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUndoCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUndoCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUndoCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUndoCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUndoCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUndoCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUndoOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUndoOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUndoOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUndoSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUndoSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUndoSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUpCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUpCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUpCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUpCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUpCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUpCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUpCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUpCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUpCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUpOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUpOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconArrowUpSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconArrowUpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ArrowUpSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAt = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAt',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><At /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAtCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAtCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AtCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAtCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAtCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AtCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAtCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAtCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AtCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAtOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAtOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AtOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAtSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAtSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AtSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAttach = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAttach',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Attach /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAttachOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAttachOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AttachOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconAttachSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconAttachSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><AttachSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBackspace = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBackspace',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Backspace /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBackspaceOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBackspaceOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BackspaceOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBackspaceSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBackspaceSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BackspaceSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBag = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBag',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bag /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagAdd = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagAdd',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagAdd /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagAddOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagAddOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagAddOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagAddSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagAddSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagAddSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagCheck = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagCheck',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagCheck /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagCheckOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagCheckOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagCheckOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagCheckSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagCheckSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagCheckSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagHandle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagHandle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagHandle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagHandleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagHandleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagHandleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagHandleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagHandleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagHandleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagRemove = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagRemove',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagRemove /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagRemoveOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagRemoveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagRemoveOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagRemoveSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagRemoveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagRemoveSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBagSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBagSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BagSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBalloon = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBalloon',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Balloon /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBalloonOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBalloonOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BalloonOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBalloonSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBalloonSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BalloonSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBan = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBan',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Ban /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBanOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBanOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BanOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBanSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBanSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BanSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBandage = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBandage',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bandage /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBandageOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBandageOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BandageOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBandageSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBandageSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BandageSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBarChart = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBarChart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BarChart /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBarChartOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBarChartOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BarChartOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBarChartSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBarChartSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BarChartSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBarbell = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBarbell',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Barbell /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBarbellOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBarbellOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BarbellOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBarbellSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBarbellSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BarbellSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBarcode = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBarcode',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Barcode /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBarcodeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBarcodeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BarcodeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBarcodeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBarcodeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BarcodeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBaseball = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBaseball',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Baseball /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBaseballOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBaseballOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BaseballOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBaseballSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBaseballSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BaseballSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBasket = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBasket',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Basket /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBasketOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBasketOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BasketOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBasketSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBasketSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BasketSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBasketball = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBasketball',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Basketball /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBasketballOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBasketballOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BasketballOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBasketballSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBasketballSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BasketballSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryCharging = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryCharging',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryCharging /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryChargingOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryChargingOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryChargingOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryChargingSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryChargingSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryChargingSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryDead = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryDead',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryDead /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryDeadOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryDeadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryDeadOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryDeadSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryDeadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryDeadSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryFull = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryFull',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryFull /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryFullOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryFullOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryFullOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryFullSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryFullSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryFullSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryHalf = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryHalf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryHalf /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryHalfOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryHalfOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryHalfOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBatteryHalfSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBatteryHalfSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BatteryHalfSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBeaker = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBeaker',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Beaker /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBeakerOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBeakerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BeakerOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBeakerSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBeakerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BeakerSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBed = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBed',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bed /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBedOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBedOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BedOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBedSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBedSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BedSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBeer = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBeer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Beer /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBeerOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBeerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BeerOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBeerSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBeerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BeerSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBicycle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBicycle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bicycle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBicycleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBicycleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BicycleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBicycleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBicycleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BicycleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBluetooth = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBluetooth',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bluetooth /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBluetoothOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBluetoothOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BluetoothOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBluetoothSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBluetoothSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BluetoothSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBoat = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBoat',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Boat /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBoatOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBoatOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BoatOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBoatSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBoatSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BoatSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBody = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBody',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Body /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBodyOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBodyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BodyOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBodySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBodySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BodySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBonfire = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBonfire',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bonfire /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBonfireOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBonfireOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BonfireOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBonfireSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBonfireSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BonfireSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBook = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBook',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Book /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBookOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBookOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BookOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBookSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBookSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BookSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBookmark = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBookmark',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bookmark /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBookmarkOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBookmarkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BookmarkOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBookmarkSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBookmarkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BookmarkSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBookmarks = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBookmarks',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bookmarks /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBookmarksOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBookmarksOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BookmarksOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBookmarksSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBookmarksSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BookmarksSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBowlingBall = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBowlingBall',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BowlingBall /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBowlingBallOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBowlingBallOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BowlingBallOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBowlingBallSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBowlingBallSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BowlingBallSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBriefcase = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBriefcase',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Briefcase /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBriefcaseOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBriefcaseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BriefcaseOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBriefcaseSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBriefcaseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BriefcaseSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBrowsers = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBrowsers',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Browsers /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBrowsersOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBrowsersOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BrowsersOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBrowsersSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBrowsersSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BrowsersSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBrush = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBrush',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Brush /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBrushOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBrushOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BrushOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBrushSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBrushSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BrushSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBug = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBug',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bug /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBugOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBugOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BugOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBugSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBugSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BugSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBuild = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBuild',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Build /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBuildOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBuildOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BuildOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBuildSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBuildSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BuildSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBulb = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBulb',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bulb /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBulbOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBulbOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BulbOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBulbSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBulbSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BulbSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBus = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBus',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Bus /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBusOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBusOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BusOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBusSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBusSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BusSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBusiness = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBusiness',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Business /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBusinessOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBusinessOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BusinessOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconBusinessSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconBusinessSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><BusinessSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCafe = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCafe',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Cafe /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCafeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCafeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CafeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCafeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCafeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CafeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalculator = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalculator',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Calculator /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalculatorOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalculatorOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CalculatorOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalculatorSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalculatorSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CalculatorSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalendar = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalendar',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Calendar /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalendarClear = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalendarClear',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CalendarClear /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalendarClearOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalendarClearOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CalendarClearOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalendarClearSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalendarClearSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CalendarClearSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalendarNumber = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalendarNumber',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CalendarNumber /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalendarNumberOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalendarNumberOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CalendarNumberOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalendarNumberSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalendarNumberSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CalendarNumberSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalendarOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalendarOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CalendarOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCalendarSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCalendarSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CalendarSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCall = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCall',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Call /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCallOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCallOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CallOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCallSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCallSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CallSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCamera = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCamera',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Camera /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCameraOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCameraOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CameraOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCameraReverse = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCameraReverse',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CameraReverse /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCameraReverseOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCameraReverseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CameraReverseOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCameraReverseSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCameraReverseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CameraReverseSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCameraSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCameraSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CameraSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCar = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCar',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Car /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCarOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCarOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CarOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCarSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCarSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CarSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCarSport = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCarSport',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CarSport /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCarSportOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCarSportOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CarSportOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCarSportSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCarSportSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CarSportSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCard = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCard',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Card /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCardOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CardOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCardSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CardSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretBack = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretBack /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretBackCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretBackCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretBackCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretBackCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretBackCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretBackCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretBackCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretBackCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretBackCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretBackOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretBackOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretBackSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretBackSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretDown = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretDown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretDown /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretDownCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretDownCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretDownCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretDownCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretDownCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretDownCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretDownCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretDownCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretDownCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretDownOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretDownOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretDownOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretDownSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretDownSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretDownSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretForward = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretForward /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretForwardCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretForwardCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretForwardCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretForwardCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretForwardCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretForwardCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretForwardCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretForwardCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretForwardCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretForwardOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretForwardOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretForwardSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretForwardSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretUp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretUp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretUp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretUpCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretUpCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretUpCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretUpCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretUpCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretUpCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretUpCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretUpCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretUpCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretUpOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretUpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretUpOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCaretUpSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCaretUpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CaretUpSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCart = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Cart /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCartOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCartOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CartOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCartSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCartSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CartSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCash = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCash',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Cash /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCashOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCashOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CashOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCashSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCashSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CashSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCellular = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCellular',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Cellular /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCellularOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCellularOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CellularOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCellularSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCellularSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CellularSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatbox = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatbox',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Chatbox /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatboxEllipses = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatboxEllipses',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatboxEllipses /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatboxEllipsesOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatboxEllipsesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatboxEllipsesOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatboxEllipsesSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatboxEllipsesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatboxEllipsesSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatboxOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatboxOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatboxOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatboxSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatboxSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatboxSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatbubble = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatbubble',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Chatbubble /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatbubbleEllipses = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatbubbleEllipses',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatbubbleEllipses /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatbubbleEllipsesOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatbubbleEllipsesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatbubbleEllipsesOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatbubbleEllipsesSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatbubbleEllipsesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatbubbleEllipsesSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatbubbleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatbubbleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatbubbleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatbubbleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatbubbleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatbubbleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatbubbles = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatbubbles',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Chatbubbles /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatbubblesOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatbubblesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatbubblesOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChatbubblesSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChatbubblesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChatbubblesSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckbox = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckbox',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Checkbox /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckboxOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckboxOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckboxOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckboxSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckboxSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckboxSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmark = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmark',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Checkmark /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkDone = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkDone',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkDone /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkDoneCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkDoneCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkDoneCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkDoneCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkDoneCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkDoneCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkDoneCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkDoneCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkDoneCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkDoneOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkDoneOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkDoneOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkDoneSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkDoneSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkDoneSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCheckmarkSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCheckmarkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CheckmarkSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronBack = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronBack /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronBackCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronBackCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronBackCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronBackCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronBackCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronBackCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronBackCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronBackCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronBackCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronBackOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronBackOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronBackSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronBackSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronDown = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronDown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronDown /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronDownCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronDownCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronDownCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronDownCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronDownCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronDownCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronDownCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronDownCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronDownCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronDownOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronDownOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronDownOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronDownSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronDownSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronDownSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronForward = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronForward /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronForwardCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronForwardCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronForwardCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronForwardCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronForwardCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronForwardCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronForwardCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronForwardCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronForwardCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronForwardOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronForwardOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronForwardSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronForwardSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronUp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronUp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronUp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronUpCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronUpCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronUpCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronUpCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronUpCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronUpCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronUpCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronUpCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronUpCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronUpOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronUpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronUpOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconChevronUpSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconChevronUpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ChevronUpSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconClipboard = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconClipboard',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Clipboard /></Icon>
    );
  },
}) as any as IconComponent;


export const IconClipboardOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconClipboardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ClipboardOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconClipboardSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconClipboardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ClipboardSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconClose = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconClose',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Close /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloseCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloseCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloseCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloseCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloseCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloseCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloseCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloseCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloseCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloseOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloseOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloseSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloseSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloud = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloud',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Cloud /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudDone = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudDone',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudDone /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudDoneOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudDoneOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudDoneOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudDoneSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudDoneSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudDoneSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudDownload = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudDownload',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudDownload /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudDownloadOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudDownloadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudDownloadOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudDownloadSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudDownloadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudDownloadSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudOffline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudOffline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudOffline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudOfflineOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudOfflineOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudOfflineOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudOfflineSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudOfflineSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudOfflineSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudUpload = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudUpload',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudUpload /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudUploadOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudUploadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudUploadOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudUploadSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudUploadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudUploadSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudy = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Cloudy /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudyNight = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudyNight',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudyNight /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudyNightOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudyNightOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudyNightOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudyNightSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudyNightSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudyNightSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudyOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudyOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCloudySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCloudySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CloudySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCode = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCode',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Code /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeDownload = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeDownload',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeDownload /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeDownloadOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeDownloadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeDownloadOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeDownloadSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeDownloadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeDownloadSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeSlash = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeSlash',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeSlash /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeSlashOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeSlashOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeSlashOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeSlashSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeSlashSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeSlashSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeWorking = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeWorking',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeWorking /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeWorkingOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeWorkingOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeWorkingOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCodeWorkingSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCodeWorkingSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CodeWorkingSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCog = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCog',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Cog /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCogOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCogOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CogOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCogSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCogSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CogSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorFill = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorFill',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorFill /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorFillOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorFillOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorFillOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorFillSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorFillSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorFillSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorFilter = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorFilter',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorFilter /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorFilterOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorFilterOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorFilterOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorFilterSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorFilterSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorFilterSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorPalette = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorPalette',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorPalette /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorPaletteOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorPaletteOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorPaletteOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorPaletteSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorPaletteSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorPaletteSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorWand = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorWand',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorWand /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorWandOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorWandOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorWandOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconColorWandSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconColorWandSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ColorWandSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCompass = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCompass',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Compass /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCompassOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCompassOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CompassOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCompassSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCompassSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CompassSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconConstruct = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconConstruct',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Construct /></Icon>
    );
  },
}) as any as IconComponent;


export const IconConstructOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconConstructOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ConstructOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconConstructSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconConstructSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ConstructSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconContract = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconContract',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Contract /></Icon>
    );
  },
}) as any as IconComponent;


export const IconContractOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconContractOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ContractOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconContractSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconContractSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ContractSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconContrast = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconContrast',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Contrast /></Icon>
    );
  },
}) as any as IconComponent;


export const IconContrastOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconContrastOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ContrastOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconContrastSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconContrastSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ContrastSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCopy = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCopy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Copy /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCopyOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCopyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CopyOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCopySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCopySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CopySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCreate = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCreate',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Create /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCreateOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCreateOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CreateOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCreateSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCreateSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CreateSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCrop = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCrop',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Crop /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCropOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCropOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CropOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCropSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCropSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CropSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCube = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCube',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Cube /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCubeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCubeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CubeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCubeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCubeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CubeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCut = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCut',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Cut /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCutOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCutOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CutOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconCutSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconCutSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><CutSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDesktop = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDesktop',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Desktop /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDesktopOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDesktopOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DesktopOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDesktopSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDesktopSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DesktopSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDiamond = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDiamond',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Diamond /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDiamondOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDiamondOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DiamondOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDiamondSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDiamondSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DiamondSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDice = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDice',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Dice /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDiceOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDiceOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DiceOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDiceSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDiceSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DiceSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDisc = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDisc',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Disc /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDiscOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDiscOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DiscOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDiscSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDiscSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DiscSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocument = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocument',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Document /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentAttach = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentAttach',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentAttach /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentAttachOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentAttachOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentAttachOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentAttachSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentAttachSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentAttachSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentLock = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentLock',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentLock /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentLockOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentLockOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentLockOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentLockSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentLockSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentLockSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentText = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentText',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentText /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentTextOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentTextOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentTextOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentTextSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentTextSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentTextSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocuments = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocuments',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Documents /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentsOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentsOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDocumentsSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDocumentsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DocumentsSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDownload = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDownload',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Download /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDownloadOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDownloadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DownloadOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDownloadSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDownloadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DownloadSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDuplicate = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDuplicate',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Duplicate /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDuplicateOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDuplicateOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DuplicateOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconDuplicateSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconDuplicateSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><DuplicateSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEar = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEar',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Ear /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEarOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEarOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EarOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEarSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEarSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EarSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEarth = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEarth',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Earth /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEarthOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEarthOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EarthOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEarthSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEarthSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EarthSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEasel = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEasel',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Easel /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEaselOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEaselOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EaselOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEaselSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEaselSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EaselSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEgg = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEgg',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Egg /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEggOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEggOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EggOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEggSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEggSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EggSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipse = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipse',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Ellipse /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipseOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipseOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipseSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipseSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisHorizontal = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisHorizontal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisHorizontal /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisHorizontalCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisHorizontalCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisHorizontalCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisHorizontalCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisHorizontalCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisHorizontalCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisHorizontalCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisHorizontalCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisHorizontalCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisHorizontalOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisHorizontalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisHorizontalOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisHorizontalSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisHorizontalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisHorizontalSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisVertical = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisVertical',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisVertical /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisVerticalCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisVerticalCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisVerticalCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisVerticalCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisVerticalCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisVerticalCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisVerticalCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisVerticalCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisVerticalCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisVerticalOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisVerticalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisVerticalOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEllipsisVerticalSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEllipsisVerticalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EllipsisVerticalSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEnter = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEnter',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Enter /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEnterOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEnterOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EnterOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEnterSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEnterSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EnterSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconExit = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconExit',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Exit /></Icon>
    );
  },
}) as any as IconComponent;


export const IconExitOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconExitOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ExitOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconExitSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconExitSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ExitSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconExpand = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconExpand',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Expand /></Icon>
    );
  },
}) as any as IconComponent;


export const IconExpandOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconExpandOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ExpandOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconExpandSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconExpandSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ExpandSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconExtensionPuzzle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconExtensionPuzzle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ExtensionPuzzle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconExtensionPuzzleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconExtensionPuzzleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ExtensionPuzzleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconExtensionPuzzleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconExtensionPuzzleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ExtensionPuzzleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEye = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEye',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Eye /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEyeOff = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEyeOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EyeOff /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEyeOffOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEyeOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EyeOffOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEyeOffSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEyeOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EyeOffSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEyeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEyeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EyeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEyeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEyeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EyeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEyedrop = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEyedrop',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Eyedrop /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEyedropOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEyedropOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EyedropOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconEyedropSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconEyedropSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><EyedropSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFastFood = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFastFood',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FastFood /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFastFoodOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFastFoodOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FastFoodOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFastFoodSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFastFoodSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FastFoodSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFemale = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFemale',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Female /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFemaleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFemaleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FemaleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFemaleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFemaleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FemaleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFileTray = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFileTray',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FileTray /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFileTrayFull = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFileTrayFull',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FileTrayFull /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFileTrayFullOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFileTrayFullOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FileTrayFullOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFileTrayFullSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFileTrayFullSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FileTrayFullSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFileTrayOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFileTrayOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FileTrayOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFileTraySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFileTraySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FileTraySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFileTrayStacked = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFileTrayStacked',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FileTrayStacked /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFileTrayStackedOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFileTrayStackedOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FileTrayStackedOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFileTrayStackedSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFileTrayStackedSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FileTrayStackedSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFilm = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFilm',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Film /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFilmOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFilmOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FilmOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFilmSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFilmSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FilmSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFilter = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFilter',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Filter /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFilterCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFilterCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FilterCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFilterCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFilterCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FilterCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFilterCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFilterCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FilterCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFilterOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFilterOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FilterOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFilterSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFilterSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FilterSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFingerPrint = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFingerPrint',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FingerPrint /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFingerPrintOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFingerPrintOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FingerPrintOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFingerPrintSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFingerPrintSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FingerPrintSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFish = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFish',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Fish /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFishOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFishOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FishOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFishSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFishSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FishSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFitness = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFitness',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Fitness /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFitnessOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFitnessOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FitnessOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFitnessSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFitnessSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FitnessSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlag = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlag',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Flag /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlagOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlagOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlagOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlagSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlagSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlagSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlame = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlame',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Flame /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlameOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlameOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlameOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlameSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlameSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlameSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlash = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlash',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Flash /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlashOff = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlashOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlashOff /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlashOffOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlashOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlashOffOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlashOffSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlashOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlashOffSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlashOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlashOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlashOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlashSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlashSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlashSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlashlight = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlashlight',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Flashlight /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlashlightOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlashlightOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlashlightOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlashlightSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlashlightSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlashlightSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlask = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlask',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Flask /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlaskOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlaskOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlaskOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlaskSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlaskSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlaskSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlower = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlower',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Flower /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlowerOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlowerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlowerOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFlowerSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFlowerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FlowerSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFolder = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFolder',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Folder /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFolderOpen = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFolderOpen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FolderOpen /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFolderOpenOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFolderOpenOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FolderOpenOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFolderOpenSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFolderOpenSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FolderOpenSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFolderOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFolderOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FolderOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFolderSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFolderSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FolderSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFootball = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFootball',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Football /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFootballOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFootballOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FootballOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFootballSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFootballSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FootballSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFootsteps = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFootsteps',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Footsteps /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFootstepsOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFootstepsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FootstepsOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFootstepsSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFootstepsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FootstepsSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFunnel = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFunnel',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Funnel /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFunnelOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFunnelOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FunnelOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconFunnelSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconFunnelSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><FunnelSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGameController = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGameController',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GameController /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGameControllerOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGameControllerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GameControllerOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGameControllerSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGameControllerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GameControllerSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGift = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGift',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Gift /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGiftOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGiftOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GiftOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGiftSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGiftSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GiftSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitBranch = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitBranch',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitBranch /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitBranchOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitBranchOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitBranchOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitBranchSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitBranchSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitBranchSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitCommit = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitCommit',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitCommit /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitCommitOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitCommitOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitCommitOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitCommitSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitCommitSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitCommitSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitCompare = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitCompare',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitCompare /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitCompareOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitCompareOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitCompareOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitCompareSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitCompareSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitCompareSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitMerge = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitMerge',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitMerge /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitMergeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitMergeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitMergeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitMergeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitMergeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitMergeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitNetwork = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitNetwork',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitNetwork /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitNetworkOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitNetworkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitNetworkOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitNetworkSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitNetworkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitNetworkSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitPullRequest = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitPullRequest',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitPullRequest /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitPullRequestOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitPullRequestOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitPullRequestOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGitPullRequestSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGitPullRequestSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GitPullRequestSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGlasses = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGlasses',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Glasses /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGlassesOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGlassesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GlassesOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGlassesSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGlassesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GlassesSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGlobe = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGlobe',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Globe /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGlobeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGlobeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GlobeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGlobeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGlobeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GlobeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGolf = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGolf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Golf /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGolfOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGolfOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GolfOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGolfSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGolfSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GolfSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGrid = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGrid',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Grid /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGridOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGridOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GridOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconGridSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconGridSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><GridSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHammer = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHammer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Hammer /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHammerOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHammerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HammerOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHammerSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHammerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HammerSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHandLeft = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHandLeft',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HandLeft /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHandLeftOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHandLeftOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HandLeftOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHandLeftSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHandLeftSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HandLeftSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHandRight = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHandRight',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HandRight /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHandRightOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHandRightOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HandRightOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHandRightSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHandRightSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HandRightSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHappy = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHappy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Happy /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHappyOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHappyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HappyOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHappySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHappySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HappySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHardwareChip = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHardwareChip',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HardwareChip /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHardwareChipOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHardwareChipOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HardwareChipOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHardwareChipSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHardwareChipSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HardwareChipSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeadset = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeadset',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Headset /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeadsetOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeadsetOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeadsetOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeadsetSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeadsetSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeadsetSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeart = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Heart /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartDislike = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartDislike',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartDislike /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartDislikeCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartDislikeCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartDislikeCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartDislikeCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartDislikeCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartDislikeCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartDislikeCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartDislikeCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartDislikeCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartDislikeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartDislikeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartDislikeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartDislikeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartDislikeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartDislikeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartHalf = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartHalf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartHalf /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartHalfOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartHalfOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartHalfOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartHalfSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartHalfSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartHalfSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHeartSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHeartSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HeartSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHelp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHelp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Help /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHelpBuoy = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHelpBuoy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HelpBuoy /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHelpBuoyOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHelpBuoyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HelpBuoyOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHelpBuoySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHelpBuoySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HelpBuoySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHelpCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHelpCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HelpCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHelpCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHelpCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HelpCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHelpCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHelpCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HelpCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHelpOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHelpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HelpOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHelpSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHelpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HelpSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHome = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHome',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Home /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHomeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHomeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HomeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHomeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHomeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HomeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHourglass = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHourglass',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Hourglass /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHourglassOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHourglassOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HourglassOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconHourglassSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconHourglassSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><HourglassSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconIceCream = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconIceCream',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><IceCream /></Icon>
    );
  },
}) as any as IconComponent;


export const IconIceCreamOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconIceCreamOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><IceCreamOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconIceCreamSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconIceCreamSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><IceCreamSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconIdCard = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconIdCard',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><IdCard /></Icon>
    );
  },
}) as any as IconComponent;


export const IconIdCardOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconIdCardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><IdCardOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconIdCardSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconIdCardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><IdCardSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconImage = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconImage',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Image /></Icon>
    );
  },
}) as any as IconComponent;


export const IconImageOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconImageOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ImageOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconImageSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconImageSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ImageSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconImages = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconImages',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Images /></Icon>
    );
  },
}) as any as IconComponent;


export const IconImagesOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconImagesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ImagesOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconImagesSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconImagesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ImagesSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInfinite = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInfinite',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Infinite /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInfiniteOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInfiniteOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><InfiniteOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInfiniteSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInfiniteSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><InfiniteSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInformation = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInformation',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Information /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInformationCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInformationCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><InformationCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInformationCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInformationCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><InformationCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInformationCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInformationCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><InformationCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInformationOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInformationOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><InformationOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInformationSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInformationSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><InformationSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInvertMode = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInvertMode',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><InvertMode /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInvertModeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInvertModeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><InvertModeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconInvertModeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconInvertModeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><InvertModeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconJournal = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconJournal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Journal /></Icon>
    );
  },
}) as any as IconComponent;


export const IconJournalOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconJournalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><JournalOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconJournalSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconJournalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><JournalSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconKey = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconKey',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Key /></Icon>
    );
  },
}) as any as IconComponent;


export const IconKeyOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconKeyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><KeyOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconKeySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconKeySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><KeySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconKeypad = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconKeypad',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Keypad /></Icon>
    );
  },
}) as any as IconComponent;


export const IconKeypadOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconKeypadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><KeypadOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconKeypadSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconKeypadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><KeypadSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLanguage = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLanguage',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Language /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLanguageOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLanguageOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LanguageOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLanguageSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLanguageSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LanguageSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLaptop = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLaptop',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Laptop /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLaptopOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLaptopOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LaptopOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLaptopSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLaptopSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LaptopSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLayers = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLayers',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Layers /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLayersOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLayersOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LayersOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLayersSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLayersSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LayersSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLeaf = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLeaf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Leaf /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLeafOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLeafOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LeafOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLeafSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLeafSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LeafSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLibrary = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLibrary',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Library /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLibraryOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLibraryOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LibraryOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLibrarySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLibrarySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LibrarySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLink = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLink',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Link /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLinkOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLinkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LinkOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLinkSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLinkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LinkSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconList = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconList',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><List /></Icon>
    );
  },
}) as any as IconComponent;


export const IconListCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconListCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ListCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconListCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconListCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ListCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconListCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconListCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ListCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconListOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconListOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ListOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconListSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconListSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ListSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLocate = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLocate',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Locate /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLocateOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLocateOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LocateOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLocateSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLocateSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LocateSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLocation = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLocation',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Location /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLocationOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLocationOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LocationOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLocationSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLocationSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LocationSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLockClosed = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLockClosed',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LockClosed /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLockClosedOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLockClosedOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LockClosedOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLockClosedSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLockClosedSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LockClosedSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLockOpen = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLockOpen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LockOpen /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLockOpenOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLockOpenOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LockOpenOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLockOpenSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLockOpenSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LockOpenSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogIn = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogIn',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogIn /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogInOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogInOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogInOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogInSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogInSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogInSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogOut = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogOut',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogOut /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogOutOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogOutOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogOutOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogOutSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogOutSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogOutSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoAlipay = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoAlipay',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoAlipay /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoAmazon = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoAmazon',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoAmazon /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoAmplify = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoAmplify',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoAmplify /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoAndroid = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoAndroid',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoAndroid /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoAngular = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoAngular',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoAngular /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoApple = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoApple',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoApple /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoAppleAppstore = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoAppleAppstore',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoAppleAppstore /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoAppleAr = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoAppleAr',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoAppleAr /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoBehance = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoBehance',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoBehance /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoBitbucket = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoBitbucket',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoBitbucket /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoBitcoin = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoBitcoin',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoBitcoin /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoBuffer = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoBuffer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoBuffer /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoCapacitor = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoCapacitor',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoCapacitor /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoChrome = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoChrome',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoChrome /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoClosedCaptioning = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoClosedCaptioning',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoClosedCaptioning /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoCodepen = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoCodepen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoCodepen /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoCss3 = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoCss3',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoCss3 /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoDesignernews = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoDesignernews',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoDesignernews /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoDeviantart = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoDeviantart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoDeviantart /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoDiscord = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoDiscord',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoDiscord /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoDocker = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoDocker',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoDocker /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoDribbble = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoDribbble',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoDribbble /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoDropbox = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoDropbox',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoDropbox /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoEdge = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoEdge',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoEdge /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoElectron = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoElectron',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoElectron /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoEuro = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoEuro',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoEuro /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoFacebook = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoFacebook',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoFacebook /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoFigma = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoFigma',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoFigma /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoFirebase = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoFirebase',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoFirebase /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoFirefox = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoFirefox',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoFirefox /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoFlickr = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoFlickr',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoFlickr /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoFoursquare = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoFoursquare',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoFoursquare /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoGithub = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoGithub',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoGithub /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoGitlab = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoGitlab',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoGitlab /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoGoogle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoGoogle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoGoogle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoGooglePlaystore = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoGooglePlaystore',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoGooglePlaystore /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoHackernews = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoHackernews',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoHackernews /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoHtml5 = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoHtml5',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoHtml5 /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoInstagram = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoInstagram',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoInstagram /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoIonic = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoIonic',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoIonic /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoIonitron = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoIonitron',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoIonitron /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoJavascript = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoJavascript',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoJavascript /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoLaravel = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoLaravel',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoLaravel /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoLinkedin = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoLinkedin',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoLinkedin /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoMarkdown = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoMarkdown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoMarkdown /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoMastodon = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoMastodon',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoMastodon /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoMedium = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoMedium',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoMedium /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoMicrosoft = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoMicrosoft',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoMicrosoft /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoNoSmoking = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoNoSmoking',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoNoSmoking /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoNodejs = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoNodejs',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoNodejs /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoNpm = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoNpm',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoNpm /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoOctocat = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoOctocat',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoOctocat /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoPaypal = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoPaypal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoPaypal /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoPinterest = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoPinterest',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoPinterest /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoPlaystation = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoPlaystation',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoPlaystation /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoPwa = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoPwa',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoPwa /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoPython = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoPython',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoPython /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoReact = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoReact',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoReact /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoReddit = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoReddit',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoReddit /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoRss = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoRss',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoRss /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoSass = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoSass',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoSass /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoSkype = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoSkype',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoSkype /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoSlack = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoSlack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoSlack /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoSnapchat = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoSnapchat',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoSnapchat /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoSoundcloud = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoSoundcloud',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoSoundcloud /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoStackoverflow = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoStackoverflow',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoStackoverflow /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoSteam = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoSteam',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoSteam /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoStencil = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoStencil',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoStencil /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoTableau = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoTableau',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoTableau /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoTiktok = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoTiktok',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoTiktok /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoTumblr = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoTumblr',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoTumblr /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoTux = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoTux',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoTux /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoTwitch = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoTwitch',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoTwitch /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoTwitter = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoTwitter',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoTwitter /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoUsd = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoUsd',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoUsd /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoVenmo = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoVenmo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoVenmo /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoVercel = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoVercel',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoVercel /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoVimeo = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoVimeo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoVimeo /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoVk = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoVk',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoVk /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoVue = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoVue',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoVue /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoWebComponent = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoWebComponent',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoWebComponent /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoWechat = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoWechat',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoWechat /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoWhatsapp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoWhatsapp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoWhatsapp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoWindows = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoWindows',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoWindows /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoWordpress = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoWordpress',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoWordpress /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoXbox = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoXbox',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoXbox /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoXing = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoXing',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoXing /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoYahoo = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoYahoo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoYahoo /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoYen = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoYen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoYen /></Icon>
    );
  },
}) as any as IconComponent;


export const IconLogoYoutube = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconLogoYoutube',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><LogoYoutube /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMagnet = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMagnet',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Magnet /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMagnetOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMagnetOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MagnetOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMagnetSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMagnetSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MagnetSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMail = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMail',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Mail /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMailOpen = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMailOpen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MailOpen /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMailOpenOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMailOpenOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MailOpenOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMailOpenSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMailOpenSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MailOpenSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMailOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMailOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MailOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMailSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMailSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MailSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMailUnread = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMailUnread',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MailUnread /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMailUnreadOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMailUnreadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MailUnreadOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMailUnreadSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMailUnreadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MailUnreadSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMale = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMale',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Male /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMaleFemale = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMaleFemale',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MaleFemale /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMaleFemaleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMaleFemaleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MaleFemaleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMaleFemaleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMaleFemaleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MaleFemaleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMaleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMaleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MaleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMaleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMaleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MaleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMan = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMan',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Man /></Icon>
    );
  },
}) as any as IconComponent;


export const IconManOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconManOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ManOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconManSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconManSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ManSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMap = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMap',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Map /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMapOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMapOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MapOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMapSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMapSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MapSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMedal = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMedal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Medal /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMedalOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMedalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MedalOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMedalSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMedalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MedalSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMedical = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMedical',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Medical /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMedicalOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMedicalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MedicalOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMedicalSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMedicalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MedicalSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMedkit = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMedkit',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Medkit /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMedkitOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMedkitOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MedkitOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMedkitSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMedkitSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MedkitSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMegaphone = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMegaphone',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Megaphone /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMegaphoneOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMegaphoneOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MegaphoneOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMegaphoneSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMegaphoneSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MegaphoneSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMenu = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMenu',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Menu /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMenuOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMenuOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MenuOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMenuSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMenuSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MenuSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMic = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMic',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Mic /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicOff = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicOff /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicOffCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicOffCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicOffCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicOffCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicOffCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicOffCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicOffCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicOffCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicOffCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicOffOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicOffOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicOffSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicOffSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMicSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMicSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MicSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMoon = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMoon',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Moon /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMoonOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMoonOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MoonOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMoonSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMoonSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MoonSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMove = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMove',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Move /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMoveOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMoveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MoveOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMoveSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMoveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MoveSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMusicalNote = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMusicalNote',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MusicalNote /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMusicalNoteOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMusicalNoteOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MusicalNoteOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMusicalNoteSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMusicalNoteSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MusicalNoteSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMusicalNotes = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMusicalNotes',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MusicalNotes /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMusicalNotesOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMusicalNotesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MusicalNotesOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconMusicalNotesSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconMusicalNotesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><MusicalNotesSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNavigate = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNavigate',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Navigate /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNavigateCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNavigateCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NavigateCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNavigateCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNavigateCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NavigateCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNavigateCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNavigateCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NavigateCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNavigateOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNavigateOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NavigateOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNavigateSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNavigateSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NavigateSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNewspaper = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNewspaper',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Newspaper /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNewspaperOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNewspaperOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NewspaperOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNewspaperSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNewspaperSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NewspaperSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotifications = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotifications',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Notifications /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsOff = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsOff /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsOffCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsOffCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsOffCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsOffCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsOffCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsOffCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsOffCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsOffCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsOffCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsOffOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsOffOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsOffSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsOffSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNotificationsSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNotificationsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NotificationsSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNuclear = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNuclear',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Nuclear /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNuclearOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNuclearOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NuclearOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNuclearSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNuclearSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NuclearSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNutrition = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNutrition',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Nutrition /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNutritionOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNutritionOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NutritionOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconNutritionSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconNutritionSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><NutritionSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconOpen = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconOpen',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Open /></Icon>
    );
  },
}) as any as IconComponent;


export const IconOpenOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconOpenOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><OpenOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconOpenSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconOpenSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><OpenSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconOptions = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconOptions',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Options /></Icon>
    );
  },
}) as any as IconComponent;


export const IconOptionsOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconOptionsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><OptionsOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconOptionsSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconOptionsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><OptionsSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPaperPlane = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPaperPlane',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PaperPlane /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPaperPlaneOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPaperPlaneOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PaperPlaneOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPaperPlaneSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPaperPlaneSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PaperPlaneSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPartlySunny = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPartlySunny',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PartlySunny /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPartlySunnyOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPartlySunnyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PartlySunnyOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPartlySunnySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPartlySunnySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PartlySunnySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPause = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPause',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Pause /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPauseCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPauseCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PauseCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPauseCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPauseCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PauseCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPauseCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPauseCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PauseCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPauseOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPauseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PauseOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPauseSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPauseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PauseSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPaw = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPaw',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Paw /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPawOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPawOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PawOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPawSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPawSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PawSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPencil = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPencil',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Pencil /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPencilOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPencilOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PencilOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPencilSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPencilSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PencilSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPeople = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPeople',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><People /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPeopleCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPeopleCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PeopleCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPeopleCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPeopleCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PeopleCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPeopleCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPeopleCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PeopleCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPeopleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPeopleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PeopleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPeopleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPeopleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PeopleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPerson = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPerson',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Person /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonAdd = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonAdd',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonAdd /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonAddOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonAddOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonAddOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonAddSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonAddSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonAddSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonRemove = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonRemove',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonRemove /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonRemoveOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonRemoveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonRemoveOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonRemoveSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonRemoveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonRemoveSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPersonSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPersonSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PersonSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPhoneLandscape = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPhoneLandscape',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PhoneLandscape /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPhoneLandscapeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPhoneLandscapeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PhoneLandscapeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPhoneLandscapeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPhoneLandscapeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PhoneLandscapeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPhonePortrait = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPhonePortrait',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PhonePortrait /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPhonePortraitOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPhonePortraitOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PhonePortraitOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPhonePortraitSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPhonePortraitSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PhonePortraitSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPieChart = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPieChart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PieChart /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPieChartOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPieChartOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PieChartOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPieChartSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPieChartSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PieChartSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPin = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPin',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Pin /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPinOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPinOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PinOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPinSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPinSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PinSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPint = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPint',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Pint /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPintOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPintOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PintOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPintSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPintSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PintSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPizza = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPizza',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Pizza /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPizzaOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPizzaOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PizzaOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPizzaSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPizzaSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PizzaSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlanet = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlanet',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Planet /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlanetOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlanetOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlanetOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlanetSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlanetSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlanetSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlay = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlay',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Play /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayBack = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayBack /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayBackCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayBackCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayBackCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayBackCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayBackCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayBackCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayBackCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayBackCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayBackCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayBackOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayBackOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayBackSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayBackSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayForward = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayForward /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayForwardCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayForwardCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayForwardCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayForwardCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayForwardCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayForwardCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayForwardCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayForwardCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayForwardCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayForwardOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayForwardOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayForwardSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayForwardSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlayOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlayOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlayOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipBack = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipBack /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipBackCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipBackCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipBackCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipBackCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipBackCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipBackCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipBackCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipBackCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipBackCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipBackOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipBackOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipBackSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipBackSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipForward = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipForward /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipForwardCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipForwardCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipForwardCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipForwardCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipForwardCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipForwardCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipForwardCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipForwardCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipForwardCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipForwardOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipForwardOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPlaySkipForwardSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPlaySkipForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PlaySkipForwardSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPodium = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPodium',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Podium /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPodiumOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPodiumOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PodiumOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPodiumSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPodiumSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PodiumSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPower = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPower',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Power /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPowerOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPowerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PowerOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPowerSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPowerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PowerSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPricetag = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPricetag',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Pricetag /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPricetagOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPricetagOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PricetagOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPricetagSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPricetagSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PricetagSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPricetags = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPricetags',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Pricetags /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPricetagsOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPricetagsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PricetagsOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPricetagsSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPricetagsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PricetagsSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPrint = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPrint',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Print /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPrintOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPrintOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PrintOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPrintSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPrintSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PrintSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPrism = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPrism',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Prism /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPrismOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPrismOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PrismOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPrismSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPrismSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PrismSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPulse = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPulse',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Pulse /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPulseOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPulseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PulseOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPulseSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPulseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PulseSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPush = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPush',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Push /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPushOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPushOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PushOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconPushSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconPushSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><PushSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconQrCode = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconQrCode',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><QrCode /></Icon>
    );
  },
}) as any as IconComponent;


export const IconQrCodeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconQrCodeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><QrCodeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconQrCodeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconQrCodeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><QrCodeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRadio = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRadio',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Radio /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRadioButtonOff = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRadioButtonOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RadioButtonOff /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRadioButtonOffOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRadioButtonOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RadioButtonOffOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRadioButtonOffSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRadioButtonOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RadioButtonOffSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRadioButtonOn = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRadioButtonOn',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RadioButtonOn /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRadioButtonOnOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRadioButtonOnOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RadioButtonOnOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRadioButtonOnSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRadioButtonOnSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RadioButtonOnSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRadioOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRadioOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RadioOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRadioSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRadioSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RadioSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRainy = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRainy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Rainy /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRainyOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRainyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RainyOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRainySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRainySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RainySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReader = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReader',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Reader /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReaderOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReaderOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReaderOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReaderSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReaderSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReaderSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReceipt = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReceipt',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Receipt /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReceiptOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReceiptOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReceiptOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReceiptSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReceiptSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReceiptSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRecording = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRecording',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Recording /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRecordingOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRecordingOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RecordingOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRecordingSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRecordingSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RecordingSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRefresh = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRefresh',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Refresh /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRefreshCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRefreshCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RefreshCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRefreshCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRefreshCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RefreshCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRefreshCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRefreshCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RefreshCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRefreshOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRefreshOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RefreshOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRefreshSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRefreshSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RefreshSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReload = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReload',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Reload /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReloadCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReloadCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReloadCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReloadCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReloadCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReloadCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReloadCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReloadCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReloadCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReloadOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReloadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReloadOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReloadSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReloadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReloadSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRemove = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRemove',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Remove /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRemoveCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRemoveCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RemoveCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRemoveCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRemoveCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RemoveCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRemoveCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRemoveCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RemoveCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRemoveOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRemoveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RemoveOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRemoveSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRemoveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RemoveSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReorderFour = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReorderFour',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReorderFour /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReorderFourOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReorderFourOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReorderFourOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReorderFourSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReorderFourSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReorderFourSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReorderThree = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReorderThree',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReorderThree /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReorderThreeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReorderThreeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReorderThreeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReorderThreeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReorderThreeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReorderThreeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReorderTwo = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReorderTwo',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReorderTwo /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReorderTwoOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReorderTwoOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReorderTwoOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReorderTwoSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReorderTwoSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReorderTwoSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRepeat = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRepeat',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Repeat /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRepeatOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRepeatOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RepeatOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRepeatSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRepeatSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RepeatSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconResize = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconResize',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Resize /></Icon>
    );
  },
}) as any as IconComponent;


export const IconResizeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconResizeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ResizeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconResizeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconResizeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ResizeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRestaurant = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRestaurant',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Restaurant /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRestaurantOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRestaurantOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RestaurantOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRestaurantSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRestaurantSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RestaurantSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnDownBack = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnDownBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnDownBack /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnDownBackOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnDownBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnDownBackOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnDownBackSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnDownBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnDownBackSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnDownForward = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnDownForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnDownForward /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnDownForwardOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnDownForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnDownForwardOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnDownForwardSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnDownForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnDownForwardSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnUpBack = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnUpBack',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnUpBack /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnUpBackOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnUpBackOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnUpBackOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnUpBackSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnUpBackSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnUpBackSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnUpForward = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnUpForward',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnUpForward /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnUpForwardOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnUpForwardOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnUpForwardOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconReturnUpForwardSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconReturnUpForwardSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ReturnUpForwardSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRibbon = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRibbon',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Ribbon /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRibbonOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRibbonOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RibbonOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRibbonSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRibbonSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RibbonSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRocket = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRocket',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Rocket /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRocketOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRocketOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RocketOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRocketSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRocketSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RocketSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRose = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRose',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Rose /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRoseOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRoseOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RoseOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconRoseSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconRoseSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><RoseSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSad = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSad',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Sad /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSadOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSadOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SadOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSadSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSadSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SadSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSave = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSave',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Save /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSaveOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSaveOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SaveOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSaveSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSaveSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SaveSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconScale = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconScale',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Scale /></Icon>
    );
  },
}) as any as IconComponent;


export const IconScaleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconScaleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ScaleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconScaleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconScaleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ScaleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconScan = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconScan',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Scan /></Icon>
    );
  },
}) as any as IconComponent;


export const IconScanCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconScanCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ScanCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconScanCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconScanCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ScanCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconScanCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconScanCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ScanCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconScanOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconScanOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ScanOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconScanSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconScanSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ScanSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSchool = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSchool',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><School /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSchoolOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSchoolOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SchoolOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSchoolSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSchoolSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SchoolSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSearch = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSearch',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Search /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSearchCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSearchCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SearchCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSearchCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSearchCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SearchCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSearchCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSearchCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SearchCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSearchOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSearchOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SearchOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSearchSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSearchSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SearchSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSend = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSend',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Send /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSendOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSendOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SendOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSendSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSendSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SendSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconServer = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconServer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Server /></Icon>
    );
  },
}) as any as IconComponent;


export const IconServerOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconServerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ServerOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconServerSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconServerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ServerSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSettings = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSettings',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Settings /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSettingsOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSettingsOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SettingsOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSettingsSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSettingsSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SettingsSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShapes = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShapes',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Shapes /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShapesOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShapesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShapesOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShapesSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShapesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShapesSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShare = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShare',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Share /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShareOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShareOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShareOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShareSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShareSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShareSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShareSocial = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShareSocial',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShareSocial /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShareSocialOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShareSocialOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShareSocialOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShareSocialSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShareSocialSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShareSocialSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShield = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShield',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Shield /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShieldCheckmark = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShieldCheckmark',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShieldCheckmark /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShieldCheckmarkOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShieldCheckmarkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShieldCheckmarkOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShieldCheckmarkSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShieldCheckmarkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShieldCheckmarkSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShieldHalf = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShieldHalf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShieldHalf /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShieldHalfOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShieldHalfOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShieldHalfOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShieldHalfSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShieldHalfSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShieldHalfSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShieldOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShieldOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShieldOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShieldSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShieldSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShieldSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShirt = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShirt',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Shirt /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShirtOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShirtOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShirtOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShirtSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShirtSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShirtSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShuffle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShuffle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Shuffle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShuffleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShuffleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShuffleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconShuffleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconShuffleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ShuffleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSkull = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSkull',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Skull /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSkullOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSkullOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SkullOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSkullSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSkullSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SkullSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSnow = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSnow',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Snow /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSnowOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSnowOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SnowOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSnowSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSnowSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SnowSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSparkles = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSparkles',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Sparkles /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSparklesOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSparklesOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SparklesOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSparklesSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSparklesSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SparklesSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSpeedometer = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSpeedometer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Speedometer /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSpeedometerOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSpeedometerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SpeedometerOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSpeedometerSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSpeedometerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SpeedometerSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSquare = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSquare',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Square /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSquareOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSquareOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SquareOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSquareSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSquareSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SquareSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStar = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStar',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Star /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStarHalf = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStarHalf',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StarHalf /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStarHalfOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStarHalfOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StarHalfOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStarHalfSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStarHalfSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StarHalfSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStarOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStarOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StarOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStarSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStarSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StarSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStatsChart = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStatsChart',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StatsChart /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStatsChartOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStatsChartOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StatsChartOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStatsChartSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStatsChartSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StatsChartSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStop = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStop',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Stop /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStopCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStopCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StopCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStopCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStopCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StopCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStopCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStopCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StopCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStopOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStopOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StopOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStopSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStopSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StopSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStopwatch = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStopwatch',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Stopwatch /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStopwatchOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStopwatchOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StopwatchOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStopwatchSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStopwatchSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StopwatchSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStorefront = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStorefront',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Storefront /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStorefrontOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStorefrontOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StorefrontOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconStorefrontSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconStorefrontSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><StorefrontSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSubway = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSubway',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Subway /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSubwayOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSubwayOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SubwayOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSubwaySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSubwaySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SubwaySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSunny = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSunny',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Sunny /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSunnyOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSunnyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SunnyOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSunnySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSunnySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SunnySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSwapHorizontal = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSwapHorizontal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SwapHorizontal /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSwapHorizontalOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSwapHorizontalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SwapHorizontalOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSwapHorizontalSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSwapHorizontalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SwapHorizontalSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSwapVertical = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSwapVertical',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SwapVertical /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSwapVerticalOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSwapVerticalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SwapVerticalOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSwapVerticalSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSwapVerticalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SwapVerticalSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSync = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSync',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Sync /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSyncCircle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSyncCircle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SyncCircle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSyncCircleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSyncCircleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SyncCircleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSyncCircleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSyncCircleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SyncCircleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSyncOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSyncOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SyncOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconSyncSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconSyncSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><SyncSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTabletLandscape = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTabletLandscape',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TabletLandscape /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTabletLandscapeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTabletLandscapeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TabletLandscapeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTabletLandscapeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTabletLandscapeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TabletLandscapeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTabletPortrait = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTabletPortrait',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TabletPortrait /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTabletPortraitOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTabletPortraitOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TabletPortraitOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTabletPortraitSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTabletPortraitSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TabletPortraitSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTelescope = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTelescope',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Telescope /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTelescopeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTelescopeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TelescopeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTelescopeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTelescopeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TelescopeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTennisball = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTennisball',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Tennisball /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTennisballOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTennisballOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TennisballOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTennisballSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTennisballSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TennisballSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTerminal = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTerminal',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Terminal /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTerminalOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTerminalOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TerminalOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTerminalSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTerminalSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TerminalSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconText = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconText',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Text /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTextOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTextOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TextOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTextSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTextSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TextSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThermometer = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThermometer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Thermometer /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThermometerOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThermometerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ThermometerOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThermometerSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThermometerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ThermometerSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThumbsDown = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThumbsDown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ThumbsDown /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThumbsDownOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThumbsDownOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ThumbsDownOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThumbsDownSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThumbsDownSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ThumbsDownSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThumbsUp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThumbsUp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ThumbsUp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThumbsUpOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThumbsUpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ThumbsUpOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThumbsUpSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThumbsUpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ThumbsUpSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThunderstorm = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThunderstorm',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Thunderstorm /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThunderstormOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThunderstormOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ThunderstormOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconThunderstormSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconThunderstormSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ThunderstormSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTicket = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTicket',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Ticket /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTicketOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTicketOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TicketOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTicketSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTicketSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TicketSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTime = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTime',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Time /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTimeOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTimeOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TimeOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTimeSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTimeSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TimeSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTimer = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTimer',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Timer /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTimerOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTimerOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TimerOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTimerSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTimerSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TimerSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconToday = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconToday',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Today /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTodayOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTodayOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TodayOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTodaySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTodaySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TodaySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconToggle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconToggle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Toggle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconToggleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconToggleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ToggleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconToggleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconToggleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><ToggleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrailSign = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrailSign',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrailSign /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrailSignOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrailSignOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrailSignOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrailSignSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrailSignSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrailSignSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrain = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrain',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Train /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrainOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrainOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrainOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrainSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrainSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrainSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTransgender = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTransgender',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Transgender /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTransgenderOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTransgenderOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TransgenderOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTransgenderSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTransgenderSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TransgenderSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrash = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrash',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Trash /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrashBin = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrashBin',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrashBin /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrashBinOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrashBinOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrashBinOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrashBinSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrashBinSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrashBinSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrashOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrashOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrashOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrashSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrashSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrashSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrendingDown = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrendingDown',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrendingDown /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrendingDownOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrendingDownOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrendingDownOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrendingDownSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrendingDownSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrendingDownSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrendingUp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrendingUp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrendingUp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrendingUpOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrendingUpOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrendingUpOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrendingUpSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrendingUpSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrendingUpSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTriangle = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTriangle',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Triangle /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTriangleOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTriangleOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TriangleOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTriangleSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTriangleSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TriangleSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrophy = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrophy',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Trophy /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrophyOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrophyOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrophyOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTrophySharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTrophySharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TrophySharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTv = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTv',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Tv /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTvOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTvOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TvOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconTvSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconTvSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><TvSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconUmbrella = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconUmbrella',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Umbrella /></Icon>
    );
  },
}) as any as IconComponent;


export const IconUmbrellaOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconUmbrellaOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><UmbrellaOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconUmbrellaSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconUmbrellaSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><UmbrellaSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconUnlink = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconUnlink',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Unlink /></Icon>
    );
  },
}) as any as IconComponent;


export const IconUnlinkOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconUnlinkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><UnlinkOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconUnlinkSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconUnlinkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><UnlinkSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVideocam = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVideocam',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Videocam /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVideocamOff = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVideocamOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VideocamOff /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVideocamOffOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVideocamOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VideocamOffOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVideocamOffSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVideocamOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VideocamOffSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVideocamOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVideocamOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VideocamOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVideocamSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVideocamSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VideocamSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeHigh = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeHigh',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeHigh /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeHighOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeHighOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeHighOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeHighSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeHighSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeHighSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeLow = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeLow',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeLow /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeLowOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeLowOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeLowOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeLowSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeLowSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeLowSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeMedium = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeMedium',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeMedium /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeMediumOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeMediumOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeMediumOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeMediumSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeMediumSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeMediumSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeMute = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeMute',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeMute /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeMuteOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeMuteOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeMuteOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeMuteSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeMuteSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeMuteSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeOff = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeOff',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeOff /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeOffOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeOffOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeOffOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconVolumeOffSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconVolumeOffSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><VolumeOffSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWalk = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWalk',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Walk /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWalkOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWalkOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WalkOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWalkSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWalkSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WalkSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWallet = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWallet',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Wallet /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWalletOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWalletOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WalletOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWalletSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWalletSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WalletSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWarning = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWarning',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Warning /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWarningOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWarningOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WarningOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWarningSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWarningSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WarningSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWatch = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWatch',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Watch /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWatchOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWatchOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WatchOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWatchSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWatchSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WatchSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWater = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWater',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Water /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWaterOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWaterOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WaterOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWaterSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWaterSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WaterSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWifi = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWifi',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Wifi /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWifiOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWifiOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WifiOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWifiSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWifiSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WifiSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWine = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWine',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Wine /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWineOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWineOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WineOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWineSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWineSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WineSharp /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWoman = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWoman',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><Woman /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWomanOutline = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWomanOutline',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WomanOutline /></Icon>
    );
  },
}) as any as IconComponent;


export const IconWomanSharp = /* @__PURE__ */ defineComponent<IIconProps & HTMLAttributes>({
  name: 'IconWomanSharp',
  props: iconProps as any,
  setup: (props) => {
    return () => (
      <Icon {...props}><WomanSharp /></Icon>
    );
  },
}) as any as IconComponent;
